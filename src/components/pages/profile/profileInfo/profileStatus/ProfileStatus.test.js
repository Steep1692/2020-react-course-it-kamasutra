import TestRenderer from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";
import React from "react";

describe('Profile status component', () => {
    const TEST_STATUS = 'TEST-STATUS';
    const UPDATE_STATUS_FN = jest.fn();

    const getTestRenderer = () => {
        return TestRenderer.create(<ProfileStatus status={TEST_STATUS} updateStatus={UPDATE_STATUS_FN}/>);
    };

    test('Component was mounted', () => {
        const testRenderer = getTestRenderer();
        const testInstance = testRenderer.root;
        expect(testInstance).not.toBeNull();
    });

    test('Props status is set', () => {
        const testRenderer = getTestRenderer();
        const toTree = testRenderer.toTree();
        expect(toTree.props.status).toBe(TEST_STATUS);
    });

    test('span is displayed as default', () => {
        const testRenderer = getTestRenderer();
        const testInstance = testRenderer.root;
        const span = testInstance.findByType('span');

        expect(span).not.toBeNull();
    });
    test(`input isn't displayed as default`, () => {
        const testRenderer = getTestRenderer();
        const testInstance = testRenderer.root;
        const inputs = testInstance.findAllByType('input');

        expect(inputs.length).toBe(0);
    });

    test('Input is displayed after span click', () => {
        const testRenderer = getTestRenderer();
        const testInstance = testRenderer.root;
        const span = testInstance.findByType('span');
        span.props.onClick();
        const inputs = testInstance.findAllByType('input');

        expect(inputs.length).toBe(1);
    });
    test('Span is hidden on span click', () => {
        const testRenderer = getTestRenderer();
        const testInstance = testRenderer.root;
        const span = testInstance.findByType('span');
        span.props.onClick();
        const spans = testInstance.findAllByType('span');

        expect(spans.length).toBe(0);
    });

    test('Input value is correct', () => {
        const testRenderer = getTestRenderer();
        const testInstance = testRenderer.root;
        const span = testInstance.findByType('span');
        span.props.onClick();
        const input = testInstance.findByType('input');
        const inputValue = input.props.value;

        expect(inputValue).toBe(TEST_STATUS);
    });

    test('Cb is called on input blur', () => {
        const testRenderer = getTestRenderer();
        const testInstance = testRenderer.root;
        const span = testInstance.findByType('span');
        span.props.onClick();
        const input = testInstance.findByType('input');
        input.props.onBlur();
        const cbCallsCount = UPDATE_STATUS_FN.mock.calls.length;
        expect(cbCallsCount).toBe(1);
    });
    test('Input is hidden on input blur', () => {
        const testRenderer = getTestRenderer();
        const testInstance = testRenderer.root;
        const span = testInstance.findByType('span');
        span.props.onClick();
        const input = testInstance.findByType('input');
        input.props.onBlur();
        const inputs = testInstance.findAllByType('input');

        expect(inputs.length).toBe(0);
    });
    test('Span is displayed on input blur', () => {
        const testRenderer = getTestRenderer();
        const testInstance = testRenderer.root;
        const span = testInstance.findByType('span');
        span.props.onClick();
        const input = testInstance.findByType('input');
        input.props.onBlur();

        const spans = testInstance.findAllByType('span');

        expect(spans.length).toBe(1);
    });
});