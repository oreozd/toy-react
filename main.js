import {createElement, render, Component} from './toy-react'

class Mycomponent extends Component{
    render() {
        return <div>
            <h1>my component</h1>
            {this.children}
        </div>
    }
}
//标签名是小写被认成默认标签
render(<Mycomponent id="a" class="red" >
    <div>abc</div>
    <div></div>
    <div></div>
</Mycomponent>, document.body)