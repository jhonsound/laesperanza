import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/loading.json';

export const LoadingComponent = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
        },
    };

    return (
        <div style={{ background: 'rgba(5, 5, 48, 0.2)' }} className="h-screen w-screen fixed top-0 left-0 z-50 flex justify-center items-center">
            <div className='z-50'>
                <Lottie options={defaultOptions} height={400} width={400} />
            </div>
        </div>
    );
}


