import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./Profile.module.css";

const Profile = ({ character }) => {
	const [locationData, setLocationData] = useState({});

	useEffect(() => {
		const getLocationData = async () => {
			const { data } = await axios.get(character.location.url);
			setLocationData(data);
		};
		getLocationData();
	}, [character]);

	return (
		<section className={classes["profile-wrapper"]}>
			<img src={character.image} alt="Profile" />
			<div className={classes["profile-details"]}>
				<p>Name: {character.name}</p>
				<p>Location: {locationData.name}</p>
			</div>
		</section>
	);
};

export default Profile;
