import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

const Gifs = ({ data }) => {
	return data.length ? (
		<div className={styles.grid}>
			{data.map(el => (
				<div key={el.id} className={styles.image}>
					<Image
						className={styles.imageLoad}
						src={el.images.fixed_width.url}
						alt={el.title}
						width={el.images.fixed_width.width}
						height={el.images.fixed_width.height}
						layout="responsive"
					/>
				</div>
			))}
		</div>
	) : null;
};

export default Gifs;
