import React, { useEffect } from 'react'

const DraggableMenu: React.FunctionComponent<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
> = ({ children, style }): JSX.Element => {
    const handleDrag = () => {
        const slider = document.getElementById('items')!
        let isDown = false
        let startX: number
        let scrollLeft: number

        if (slider) {
            slider.addEventListener('mousedown', (e: MouseEvent) => {
                isDown = true
                startX = e.pageX - slider.offsetLeft
                scrollLeft = slider.scrollLeft
            })
            slider.addEventListener('mouseleave', () => {
                isDown = false
            })
            slider.addEventListener('mouseup', () => {
                isDown = false
            })
            slider.addEventListener('mousemove', (e: MouseEvent) => {
                if (!isDown) return
                e.preventDefault()
                const x = e.pageX - slider.offsetLeft
                const walk = (x - startX) * 3 //scroll-fast
                slider.scrollLeft = scrollLeft - walk
            })
        }
    }
    useEffect(() => {
        handleDrag()
    }, [])

    return (
        <div className="overflow-x-hidden" style={{ ...style }}>
            <div className="flex no-wrap overflow-hidden" id="items">
                {children}
            </div>
        </div>
    )
}

export default DraggableMenu
