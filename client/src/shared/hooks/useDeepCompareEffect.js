import React, { useContext, useRef, useEffect } from 'react'
import isEqual from 'lodash/isEqual'

function deepCompareEquals(a, b) {
    return isEqual(a, b)
}

function useDeepCompareMemoize(value) {
    const ref = useRef()

    if (!deepCompareEquals(value, ref.current)) {
        ref.current = value
    }

    return ref.current
}

function useDeepCompareEffect(callback, dependencies) {
    useEffect(callback, useDeepCompareMemoize(dependencies))
}

export { useDeepCompareEffect }
