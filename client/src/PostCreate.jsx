import React, { useState } from "react";
import axios from "axios";

export default function PostCreate() {
	const [title, setTitle] = useState("");
	return (
		<div>
			<form>
				<div className="form-group">
					<label>Title</label>
					<input
						className="form-control"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
}
