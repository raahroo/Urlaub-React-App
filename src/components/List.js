import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component{
    render() {
        let itemsToDisplay = this.props.items.map(i=>{
            return (<ListItem id={i.id} item={i.item} vote={i.vote} place={i.place} voted={i.voted} display={i.display} updateMark={()=>this.props.function} />);
        });
        return(
            <ul>
                {itemsToDisplay}
            </ul>
        );
    }
}
