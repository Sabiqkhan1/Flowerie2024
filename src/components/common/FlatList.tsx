import React, { Component } from 'react'
import PropTypes from 'prop-types'
class FlatList extends Component {
    static propTypes: {
        ref: PropTypes.Requireable<object>
        rootClass: PropTypes.Requireable<string>
        children: PropTypes.Requireable<string>
    }
    static defaultProps: { ref: { current: {} }; rootClass: string }
    ref: React.RefObject<unknown>
    constructor(props: any) {
        super(props)
        this.ref = React.createRef()
        this.state = {
            isScrolling: false,
            clientX: 0,
            scrollX: 0,
        }
    }
    render() {
        return <div>FlatList</div>
    }
}

FlatList.defaultProps = {
    ref: { current: {} },
    rootClass: '',
}

FlatList.propTypes = {
    ref: PropTypes.object,
    rootClass: PropTypes.string,
    children: PropTypes.string,
}

export default FlatList
