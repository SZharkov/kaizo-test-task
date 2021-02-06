import React from "react";
import styles from "./index.module.css";

const Loading = ({ loading, children }) => {
	return loading ? (
		<div className={styles.container}>
			<div className={styles.spinner} />
		</div>
	) : children;
};

export default Loading;
