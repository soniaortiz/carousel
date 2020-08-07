import React from 'react'
let images = [
    { name: 'test1', path: '../../logo192.png' },
    { name: 'test2', path: '../../gorilla_1f98d.png' },
    { name: 'test3', path: '../../grinning-face_1f600.png' },
    { name: 'test1', path: '../../clown-face_1f921.png' },
    { name: 'test2', path: '../../fencer_1f93a.png' },
    { name: 'test3', path: '../../skier_26f7.png' },
]
export class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 3,
            selectedImg: images[0].path,
            leftLimit: 0,
            rightLimit: 2
        }
    }

    leftChevron = () => {
        if (this.state.leftLimit >=0 && this.state.rightLimit >= 3) {
            this.setState({
                leftLimit: this.state.leftLimit - 1,
                rightLimit: this.state.rightLimit - 1
            })
        }
    }

    rightChevron = () => {
        if (this.state.rightLimit < images.length - 1) {
            this.setState(
                {
                    leftLimit: this.state.leftLimit + 1,
                    rightLimit: this.state.rightLimit + 1
                }
            )
        }
    }

    displaySelectedPicture = (item) => {
        this.setState({
            selectedImg: item.path
        })
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
                                display: index >= this.state.leftLimit && index <= this.state.rightLimit ? "inline" : "none",
                                padding: '2px',
                                margin: '1px',
                            }}
                        >
                            <button 
                                onClick={() => this.displaySelectedPicture(item)}
                                style={{
                                    background: "white",
                                    'border-radius': '10%',
                                    maxHeight: '200px'
                                    
                                }}
                            >
                                <img src={`${item.path}`} alt="" 
                                    style={{
                                        height: '150px'
                                    }}
                                />
                            </button>
                        </li>
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div>
                <div> <h5>Current picture</h5>
                    <img 
                    src={this.state.selectedImg} alt="" 
                    style={{
                        height: '300px'
                    }}
                    />
                </div>
                <div>
                <button
                    onClick={this.leftChevron}
                    style={{
                        position: 'absolute',
                        height: '100px',
                        marginTop: '50px'
                    }}
                >{'<'}</button>
                <div
                    style={
                        {
                            display: "inline-block",
                            position: 'relative'
                        }
                    }
                >
                    {this.createSlides()}

                </div>
                <button
                    onClick={this.rightChevron}
                    style={{
                        position: 'absolute',
                        height: '100px',
                        marginTop: '50px'
                    }}
                > {'>'} </button>
                </div>
           </div>
        )
    }
}