/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { TabProps } from '../../../assets/data/interfaces'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Template from '../Template'
import cover from '../../../assets/images/quantity-cover.webp'
import { RootState } from '../../../redux/store'
import PostFormCounter from '../../counters/PostFormCounter'
import { setForm } from '../../../redux/cateringForm/cateringFormSlice'
import type { QuantityType, QuantityTypeKey } from '../../../assets/data/types'

const Quantity: React.FC<TabProps> = ({ nextStep }): JSX.Element => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const quantity_from_redux = useSelector(
        (state: RootState) => state.cateringForm.quantity
    )
    const [quantity, setQuantity] = useState<QuantityType>(quantity_from_redux)
    const [hasLimit, setHasLimit] = useState<boolean>(true)

    const next = (): void => {
        dispatch(setForm({ name: 'quantity', value: quantity }))
        nextStep()
    }

    const back = (): void => {
        navigate('/post-form/category')
    }

    const handleQuantity = (e: any, name: QuantityTypeKey): void => {
        let newQuantity: QuantityType = JSON.parse(JSON.stringify(quantity))

        newQuantity[name] = parseInt(e.target.value)
        setQuantity(newQuantity)
    }

    const increment = (name: QuantityTypeKey): void => {
        let newQuantity: QuantityType = JSON.parse(JSON.stringify(quantity))
        newQuantity[name] += 1
        setQuantity(newQuantity)
    }

    const decrement = (name: QuantityTypeKey): void => {
        const newQuantity: QuantityType = JSON.parse(JSON.stringify(quantity))
        newQuantity[name] -= 1
        setQuantity(newQuantity)
    }

    const toggleLimit = (): void => {
        setHasLimit(!hasLimit)
    }

    useEffect(() => {
        const newQuantity: QuantityType = JSON.parse(JSON.stringify(quantity))
        newQuantity['max'] = 0
        setQuantity(newQuantity)
    }, [hasLimit])

    return (
        <Template
            next={next}
            back={back}
            cover={cover}
            description="What is the minimum and maximum you cater for?"
        >
            <div className="w-full h-[calc(100vh-200px)] overflow-auto no-scroll flex flex-col">
                <div className="w-3/5 flex-grow flex-col flex items-center justify-center mx-auto">
                    <PostFormCounter
                        counter={quantity.min}
                        onChange={(e) => handleQuantity(e, 'min')}
                        increment={() => increment('min')}
                        decrement={() => decrement('min')}
                        label="Minimum amount of guests you will cater for"
                        limit={false}
                    />
                    <PostFormCounter
                        counter={quantity.max}
                        onChange={(e) => handleQuantity(e, 'max')}
                        increment={() => increment('max')}
                        decrement={() => decrement('max')}
                        label="Maximum amount of guests you will cater for"
                        limit={true}
                        hasLimit={hasLimit}
                        toggleLimit={toggleLimit}
                    />
                </div>
            </div>
        </Template>
    )
}

export default Quantity
