

function Posts() {
    return (
        <div>
            <form>
                <h1>Register Users</h1>

                <div>
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" />
                </div>
                <div>
                    <label>Phone</label>
                    <input type="number" />
                </div>
                <div>
                    <label>Usesubheaders</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Bloggerurl</label>
                    <input type="url" />
                </div>

                <div>
                    <label>Blognote</label>
                    <input type="text" />
                </div>

                <button>Submit form </button>

            </form>


        </div>
    )
}

export default Posts;