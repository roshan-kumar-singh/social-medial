import React, { useState } from "react";
import GoLive from "./GoLive";
import LiveAgain from "./LiveAgain";
import LiveShow from "./LiveShow";

const LiveIndex = ({ setLivePopup }) => {
	const [GoLiveShow, setGoLiveShow] = useState(true);
	const [LiveAgainShow, setLiveAgainShow] = useState(false);
	const [LiveShowShow, setLiveShowShow] = useState(false);
	return (
		<>
			{GoLiveShow && (
				<GoLive
					setLivePopup={setLivePopup}
					setGoLiveShow={setGoLiveShow}
					setLiveAgainShow={setLiveAgainShow}
					setLiveShowShow={setLiveShowShow}
				/>
			)}
			{LiveAgainShow && (
				<LiveAgain
					setLivePopup={setLivePopup}
					setGoLiveShow={setGoLiveShow}
					setLiveAgainShow={setLiveAgainShow}
					setLiveShowShow={setLiveShowShow}
				/>
			)}
			{LiveShowShow && (
				<LiveShow
					setLivePopup={setLivePopup}
					setGoLiveShow={setGoLiveShow}
					setLiveAgainShow={setLiveAgainShow}
					setLiveShowShow={setLiveShowShow}
				/>
			)}
		</>
	);
};

export default LiveIndex;
