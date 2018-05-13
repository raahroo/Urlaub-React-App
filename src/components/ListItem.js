import React from 'react';

export default class ListItem extends React.Component{
    render(){
		return(
			<li id={this.props.id} className={this.props.display?'itemShow':'itemHide'}>
				<div className='itemPresentation'>
					<h2>{this.props.item}</h2>
					<p>{this.props.place}</p>
				</div>
				<div className='itemDetail'>
					<p>{this.props.vote} <i className="fa fa-thumbs-up" aria-hidden="true" /></p>
				</div>
				<button onClick={()=>this.props.function}>{this.props.voted?<i className="fa fa-thumbs-up" aria-hidden="true" />:<i className="fa fa-thumbs-o-up" aria-hidden="true" />}</button>
			</li>
		);
	}	
}
