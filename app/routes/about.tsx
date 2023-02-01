export default function Index() {
	return (
		<div>
			<h1>Welcome to lclhst</h1>
			<p>
				Examples:
				<ul>
					<li>
						<a href="/?__port=3000">lclhost.me?__port=3000</a>
						{` -> http://localhost:3000`}
					</li>
					<li>
						<a href="/about?__port=3000">lclhost.me/about?__port=3000</a>
						{` -> http://localhost:3000/about`}
					</li>
					<li>
						<a href="/search?__port=3000&q=snow%20shoes">
							lclhost.me/search?__port=3000&q=snow%20shoes
						</a>
						{` -> http://localhost:3000/search?q=snow%20shoes`}
					</li>
				</ul>
			</p>
			<p>That's it... 🤷‍♂️</p>
			<p>
				This was built so Kent could proxy people's local environment from
				within the EpicWeb.dev learning platform in iframes.
			</p>
		</div>
	)
}
