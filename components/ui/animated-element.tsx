"use client";
import React, { useRef, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedElementProps {
	animation: string | 'fadeInRight' | 'fadeInDown' | 'fadeInUp' | 'fadeInLeft';
	children: ReactNode;
	className?: string;
	useAnimateCSS?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
	children,
	animation,
	className,
	useAnimateCSS = false,
}) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.2, // Adjust this threshold as needed
	});

	const animationRef = useRef<HTMLDivElement>(null);

	const handleAnimation = (): ReactNode => {
		if (inView) {
			if (useAnimateCSS) {
				animationRef.current?.classList.add('animate__animated', `animate__${animation}`);
			} else {
				animationRef.current?.classList.add(animation);
			}
		} else {
			if (useAnimateCSS) {
				animationRef.current?.classList.remove('animate__animated', `animate__${animation}`);
			} else {
				animationRef.current?.classList.remove(animation);
			}
		}

		return <div className={className} ref={animationRef}>{children}</div>;
	};

	return <div ref={ref}>{handleAnimation()}</div>;
};

export default AnimatedElement;
