import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div className="bg-light-blue dib pa3 ma2 grow bw2 shadow-4">
			<img src={`https://robohash.org/${id}?size=200x200`} alt='Not Found' />
			<div >
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card; 