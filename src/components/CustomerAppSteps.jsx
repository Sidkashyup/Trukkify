'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CustomerStepCard = ({ image, title, points = [], reverse = false }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className="mx-8 max-w-[1000px] lg:mx-auto my-12 p-6 border-2 rounded-3xl shadow-md bg-white"
		>
			<div
				className={`
          flex flex-col
          md:flex-row 
          ${reverse ? 'md:flex-row-reverse' : ''} 
          gap-6 md:gap-10 items-center
        `}
			>
				{/* IMAGE */}
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="
            w-full md:w-1/2 
            relative 
            rounded-2xl 
            overflow-hidden 
            bg-gray-100
            aspect-square
            md:h-[500px] md:aspect-auto
          "
				>
					<Image
						src={image}
						alt={title}
						fill
						className="object-contain md:object-cover"
					/>
				</motion.div>

				{/* TEXT */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="w-full lg:w-1/2 flex flex-col justify-center space-y-4"
				>
					<h2 className="text-2xl md:text-3xl font-bold text-gray-800">
						{title}
					</h2>

					<ul className="space-y-3">
						{points.map((p, i) => (
							<li
								key={i}
								className="text-base md:text-lg text-gray-600 leading-relaxed font-medium"
							>
								{p}
							</li>
						))}
					</ul>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default CustomerStepCard;
