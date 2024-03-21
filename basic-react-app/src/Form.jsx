function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form was Submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="write something" />
            <button>Submit</button>
        </form>
    );
}