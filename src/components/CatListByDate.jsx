import React, { useState, useRef, useEffect } from "react";

import akima from "../assets/akima.jpg";
import boo from "../assets/boo.jpg";
import karma from "../assets/karma.jpg";
import buddy from "../assets/buddy.jpg";
import captainjack from "../assets/captain-jack.jpg";
import checkers from "../assets/checkers.jpg";
import chucky from "../assets/chucky.jpg";
import emmy from "../assets/emmy.jpg";
import frankthetank from "../assets/frank-the-tank.jpg";
import gerald from "../assets/gerald.jpg";
import gizmo from "../assets/gizmo.jpg";
import kingsimon from "../assets/king-simon.jpg";
import mouse from "../assets/mouse.jpg";
import muffin from "../assets/muffin.jpg";
import nophoto from "../assets/nophoto.jpg";
import poppy from "../assets/poppy.jpg";
import pezzetina from "../assets/pezzetina.jpg";
import roket from "../assets/roket.jpg";
import royal from "../assets/royal.jpg";
import scarlett from "../assets/scarlett.jpg";
import spice from "../assets/spice.jpg";
import stixthecat from "../assets/stix-the-cat.jpg";
import stormy from "../assets/stormy.jpg";
import ravi from "../assets/ravi.jpg";
import tiger from "../assets/tiger.jpg";
import thunder from "../assets/thunder.jpg";
import tucker from "../assets/tucker.jpg";
import turtle from "../assets/turtle.jpg";
import zoo from "../assets/zoo.jpg";

export default function CatListByDate({ catsByDate }) {
	const [visibleDays, setVisibleDays] = useState(3);
	const lastCatElementRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setVisibleDays((prevVisibleDays) => prevVisibleDays + 1);
			}
		});

		if (lastCatElementRef.current) {
			observer.observe(lastCatElementRef.current);
		}

		return () => {
			if (lastCatElementRef.current) {
				observer.unobserve(lastCatElementRef.current);
			}
		};
	}, [visibleDays]);

	function formatDate(dateStr) {
		const dateObj = new Date(dateStr);
		const dayOfWeek = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(dateObj);
		const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(dateObj);
		const day = dateObj.getDate();
		const year = dateObj.getFullYear();
		return `${dayOfWeek} ${month} ${day}, ${year}`;
	}

	const catImages = {
		akima,
		boo,
		buddy,
		captainjack,
		checkers,
		chucky,
		emmy,
		frankthetank,
		gerald,
		gizmo,
		karma,
		kingsimon,
		mouse,
		muffin,
		pezzetina,
		poppy,
		ravi,
		roket,
		royal,
		scarlett,
		spice,
		stixthecat,
		stormy,
		tiger,
		thunder,
		tucker,
		turtle,
		zoo,
	};

	const nicknames = new Set(["muffin", "royal", "spice", "stormy", "tiger", "thunder", "turtle"]);

	function getCat(cat) {
		const catKey = cat.replace(/\s+/g, "").toLowerCase();
		const catImport = catImages[catKey] || nophoto;
		const isNickname = nicknames.has(catKey);
		return { catImport, isNickname };
	}

	return (
		<div className="catlist">
			{catsByDate.slice(0, visibleDays).map((group, index) => (
				<div key={index}>
					<p className="center date">
						{group.cats.length >= 3 ? "🏆 " : ""}
						{formatDate(group.date)}
						{group.cats.length >= 3 ? " 🏆" : ""}
					</p>

					<div className="image-row">
						{group.cats.map((cat, catIndex) => {
							// get catImport and isNickname
							const { catImport, isNickname } = getCat(cat);

							if (index === visibleDays - 1 && catIndex === group.cats.length - 1) {
								return (
									<figure key={catIndex} ref={lastCatElementRef}>
										<img src={catImport.src} alt={cat} />
										<figcaption style={{ fontStyle: isNickname ? "italic" : "normal" }}>
											{isNickname ? "* " : ""}
											{cat}
										</figcaption>
									</figure>
								);
							} else {
								return (
									<figure key={catIndex}>
										<img src={catImport.src} alt={cat} />
										<figcaption style={{ fontStyle: isNickname ? "italic" : "normal" }}>
											{isNickname ? "* " : ""}
											{cat}
										</figcaption>
									</figure>
								);
							}
						})}
					</div>
				</div>
			))}
		</div>
	);
}
