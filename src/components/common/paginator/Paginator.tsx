import React, {FC, useState} from "react"
import s from './Paginator.module.css'

type OnPageClickType = (page: number) => void
type OnPrevNextBtnClickType = (...args: any) => void
type Props = {
    totalItemsCount: number
    itemsPerPage: number
    currentPage: number
    onPageClick: OnPageClickType
    pagesPerPortion?: number
    currentPortion?: number
}

const Paginator: FC<Props> = ({totalItemsCount, itemsPerPage, currentPage,
                                  onPageClick, pagesPerPortion = 5, currentPortion = 0}) => {
    const [portionIndex, setPortionIndex] = useState(currentPortion)
    const pagesCount = Math.ceil(totalItemsCount / itemsPerPage)
    const portionsCount = Math.ceil(pagesCount / pagesPerPortion)

    const generatePortionPages: () => number[] = () => {
        const visiblePages = []
        visiblePages.length = 0
        let portionStart = portionIndex * pagesPerPortion
        // to start with 1, 6, ...  not from 0, 5, ...
        portionStart += 2

        for(let page = portionStart, portionControl = 1;
            page < pagesCount;
            page++, portionControl++) {

            if(portionControl <= pagesPerPortion) {
                visiblePages.push(page)
            } else {
                break
            }
        }


        return visiblePages
    }

    const onBtnPrevPortionClick: OnPrevNextBtnClickType = () => {
        setPortionIndex(portionIndex - 1)
    }
    const onBtnNextPortionClick: OnPrevNextBtnClickType = () => {
        setPortionIndex(portionIndex + 1)
    }

    const createBtnWithPage = (page: number,
                               name: string = String(page),
                               onClick: OnPageClickType | OnPrevNextBtnClickType = onPageClick) => {
        const activePageClassName = (page === currentPage) ? s.active : ''

        return <li key={page}>
            <button
                className={ activePageClassName }
                onClick={() => { onClick(page) }}
            >{ name }</button>
        </li>
    }

    const portionPagesElements = generatePortionPages().map((page) => createBtnWithPage(page))

    return (
        <div className={s.wrapPagination}>
            <ul>
                { createBtnWithPage(1) }
                { (portionIndex > 0) && createBtnWithPage(-1, 'PREV', onBtnPrevPortionClick) }
                { portionPagesElements }
                { (portionIndex < (portionsCount - 1) ) && createBtnWithPage(-1, 'NEXT', onBtnNextPortionClick) }
                { createBtnWithPage(pagesCount) }
            </ul>
        </div>
    )
}

export default Paginator