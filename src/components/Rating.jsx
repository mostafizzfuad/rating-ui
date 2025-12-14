import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";

const Rating = ({
	heading = "Rate Your Experience",
	color = "gold",
	feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const [submitted, setSubmitted] = useState(false);
	const stars = Array.from({ length: 5 }, (_, i) => i + 1);

	const handleSubmit = () => {
		if (rating > 0) {
			setSubmitted(true);
		}
	};

	const closeModal = () => {
		setSubmitted(false);
		setRating(0); // অপশনাল: সাবমিট করার পর রেটিং রিসেট করা
	};

	return (
		<div className="rating-container">
			<h2>{heading}</h2>
			<div className="stars">
				{stars.map((star) => (
					<Star
						key={star}
						star={star}
						rating={rating}
						hover={hover}
						color={color}
						ratingClick={setRating}
						hoverEnter={setHover}
						hoverLeave={() => setHover(0)}
					/>
				))}
			</div>
			{rating > 0 && (
				<p className="feedback">{feedbackMessages[rating - 1]}</p>
			)}

			{/* Submit Button */}
			<Button
				className="submit-btn"
				onClick={handleSubmit}
				disabled={rating === 0}
			>
				Submit
			</Button>

			{/* Modal */}
			<Modal isOpen={submitted} onClose={closeModal} rating={rating} />
		</div>
	);
};

export default Rating;
