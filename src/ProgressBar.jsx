import React, { useState } from 'react';
import { Check } from 'lucide-react';
const ProgressBar = () => {
const [currentStep, setCurrentStep] = useState(1);
const [isComplete, setIsComplete] = useState(false);
const steps = [
 { id: 1, label: 'Cart' },
 { id: 2, label: 'Address' },
 { id: 3, label: 'Payment' },
 { id: 4, label: 'Checkout' }
 ];
const handleNext = () => {
if (currentStep < steps.length) {
setCurrentStep(prev => prev + 1);
 } else if (currentStep === steps.length && !isComplete) {
setIsComplete(true);
 }
 };
return (
<div className="w-full max-w-2xl mx-auto p-8">
<div className="flex items-center justify-between relative mb-8">
{steps.map((step, index) => (
<div key={step.id} className="flex flex-col items-center relative">
{/* Circle and Line Container */}
<div className="relative">
{/* Connecting Line */}
{index < steps.length - 1 && (
<div className="absolute w-32 h-1" style={{ left: '50px', top: '20px' }}>
{/* Base Line */}
<div className="absolute h-full bg-indigo-200 w-24" />
{/* Progress Line */}
<div
className={`
 absolute h-full bg-indigo-400
${index + 1 < currentStep || isComplete ? 'w-24' :
index + 1 === currentStep ? 'w-12' :
'w-0'}
 `}
/>
</div>
 )}
{/* Circle */}
<div className={`
 w-10 h-10 rounded-full flex items-center justify-center relative z-10
${step.id < currentStep || isComplete
 ? 'bg-indigo-400 text-white'
 : step.id === currentStep
 ? 'bg-indigo-400 text-white border-2 border-white ring-2 ring-indigo-400'
 : 'bg-indigo-200 text-indigo-400'}
 `}>
{step.id < currentStep || isComplete ? <Check className="w-6 h-6" /> : step.id}
</div>
</div>
{/* Labels */}
<span className="mt-2 text-sm font-medium">{step.label}</span>
<span className={`
 text-xs mt-1
${step.id <= currentStep || isComplete ? 'text-indigo-400' : 'text-gray-400'}
 `}>
{step.id < currentStep || isComplete ? 'Done' :
step.id === currentStep && !isComplete ? 'In Progress' :
'Pending'}
</span>
</div>
 ))}
</div>
{/* Next Button */}
<button
onClick={handleNext}
className={`
 px-6 py-2 rounded-lg text-white font-medium
${isComplete ? 'bg-indigo-400' : 'bg-indigo-400 hover:bg-indigo-500'}
 `}
>
{isComplete ? 'Done!' : currentStep === steps.length ? 'Next' : 'Next Step'}
</button>
</div>
 );
};
export default ProgressBar;