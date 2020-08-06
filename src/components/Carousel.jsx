import React from 'react'
let images = [
    { name: 'test1', path: '../../logo192.png' },
    { name: 'test2', path: '../../gorilla_1f98d.png' },
    { name: 'test3', path: '../../grinning-face_1f600.png' },
]
export class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '0item',
            counter: 0
        }
    }

    leftChevron = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    rightChevron = () => {
        if (this.state.counter < images.length - 1) {
            this.setState({
                counter: this.state.counter + 1
            })
        }
    }

    createSlides() {
        return (
            <ul>
                {
                    images.map((item, index) => {
                        return <li
                            key={index + 'item'}
                            id={`${index}item`}
                            style={{
                                display: this.state.counter === index ? "inline" : "none"
                            }}
                        >
                            <img src={`${item.path}`} alt="" />
                        </li>
                    })
                }
            </ul>
        )
    }

    render() {
        let x = this.createSlides()
        console.log(this.state.current)

        return (
            <div>
                <button
                    onClick={this.leftChevron}
                >Left</button>
                <div
                    style={
                        {
                            display: "inline-block"
                        }
                    }
                >
                    {x}

                </div>
                <button
                    onClick={this.rightChevron}
                >Right</button>
            </div>
        )
    }
}