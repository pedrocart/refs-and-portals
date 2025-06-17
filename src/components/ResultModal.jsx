export default function ResultModal({ ref, result, targetTime }) {
   return (
      <dialog ref={ref} className="result-modal">
         <h2>You {result ? 'won' : 'lost'}</h2>
         <p>
            The target time was <storng>{targetTime} seconds.</storng>
         </p>
         <p>
            You stopped the timer with <strong>X seconds left.</strong>
         </p>
         <form method="dialog">
            <button>Close</button>
         </form>
      </dialog>
   );
}