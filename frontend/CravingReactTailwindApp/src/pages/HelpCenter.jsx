function HelpCenter() {
  return (
    <div className="max-w-5xl mx-auto py-10">

      <h1 className="text-5xl text-center font-bold mb-10">
        Help Center
      </h1>

      <div className="space-y-4">

        <details className="border p-4 rounded">
          <summary>How do I track my order?</summary>
          <p className="mt-3">
            Go to dashboard and open orders.
          </p>
        </details>

        <details className="border p-4 rounded">
          <summary>How do I get refund?</summary>
          <p className="mt-3">
            Submit a support ticket.
          </p>
        </details>

      </div>

    </div>
  );
}

export default HelpCenter;