import React, {useState} from "react";

import s from './Paginator.module.css';

const Paginator = ({totalItemsCount, itemsPerPage, currentPage, onPageClick, pagesPerPortion = 5, currentPortion = 0}) => {
    const [portionIndex, setPortionIndex] = useState(currentPortion);
    const pagesCount = Math.ceil(totalItemsCount / itemsPerPage);
    const portionsCount = Math.ceil(pagesCount / pagesPerPortion);

    const generatePortionPages = () => {
        const visiblePages = [];
        visiblePages.length = 0;
        let portionStart = portionIndex * pagesPerPortion;
        // to start with 1, 6, ...  not from 0, 5, ...
        portionStart += 2;

        for(let page = portionStart, portionControl = 1; page < pagesCount; page++, portionControl++) {

            if(portionControl <= pagesPerPortion) {
                visiblePages.push(page);
            } else {
                break;
            }
        }


        return visiblePages;
    }

    const onBtnPrevPortionClick = () => {
        setPortionIndex(portionIndex - 1);
    };
    const onBtnNextPortionClick = () => {
        setPortionIndex(portionIndex + 1);
    };

    const createBtnWithPage = (page, onClick = onPageClick) => {
        const activePageClassName = (page === currentPage) ? s.active : '';

        return <li key={page}>
            <button
                className={ activePageClassName }
                onClick={() => { onClick(page); }}
            >{ page }</button>
        </li>;
    };

    const portionPagesElements = generatePortionPages().map((page) => createBtnWithPage(page));

    return (
        <div className={s.wrapPagination}>
            <ul>
                { createBtnWithPage(1) }
                { (portionIndex > 0) && createBtnWithPage('PREV', onBtnPrevPortionClick) }
                { portionPagesElements }
                { (portionIndex < (portionsCount - 1) ) && createBtnWithPage('NEXT', onBtnNextPortionClick) }
                { createBtnWithPage(pagesCount) }
            </ul>
        </div>
    );
}

export default Paginator;