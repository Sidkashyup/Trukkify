const HowWorks = ({ number, content }) => {
	return (
		<div className="flex bg-orange-50 px-8 py-6 gap-4 my-2 lg:mb-8 mb-4  mx-4 rounded-b-xl shadow-lg items-center">
			<h3 className="text-orange-900 text-7xl font-semibold">
				{number}
			</h3>
			<p className="text-xl font-medium text-gray-800">{content}</p>

			{/* <div className="w-2/5 flex flex-col justify-center items-center">
				<h3 className="mt-8 mb-2 font-semibold text-4xl text-blue-800">
					Download Truckyyy Now
				</h3>
				<p className="text-center text-2xl">
					Manage your shipments, contracts, and fleet operations on the go. Get
					the power of logistics in your pocket available on Android and iOS.
				</p>
			</div> */}
		</div>
	);
};
export default HowWorks;
