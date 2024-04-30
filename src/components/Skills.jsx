import Span from "./span/Span";
import Title from "./title/Title";

export default function Skills() {
	return (
		<div id="Skills" className="scrollAlign2 w-full flex items-center h-screen">
			<div className="flex flex-col items-center
            m-auto relative h-[710px] md:h-[470px] md:top-2 w-[92%] md:w-[70%] justify-start md:justify-between">
				<div className="flex flex-col items-start md:items-center relative md:bottom-5">
					<div>
						<Title>
							Habilidades
						</Title>
					</div>
					<div className="w-[90%] md:text-center md:mt-0 mt-2 flex flex-col">
						<Span>
							HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress.
						</Span>
						<div className="mt-3">
							<Span>
								Visite o meu <a
									className="text-[#9c27b0]"
									target="blank" href="https://www.linkedin.com/in/eduardo-kropniczki-67295a267/">
									Linkedin</a> para mais detalhes.
							</Span>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col justify-between h-[230px] text-[40px] md:items-center md:text-[80px] md:mt-0 mt-5">
					<div className="flex flex-wrap justify-around w-full">
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-csharp-plain"></i>
							<span className="text-base">
								C#
							</span>
						</div>
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-dotnetcore-plain"></i>
							<span className="text-base">
								.Net
							</span>
						</div>
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-javascript-plain"></i>
							<span className="text-base">
								JavaScript
							</span>
						</div>
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-react-original"></i>
							<span className="text-base">
								React
							</span>
						</div>
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-nextjs-original-wordmark"></i>
							<span className="text-base">
								Next
							</span>
						</div>
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-tailwindcss-original"></i>
							<span className="text-base">
								Tailwind
							</span>
						</div>
					</div>
					<div className="flex flex-wrap justify-around w-full md:w-[105%]">
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-html5-plain"></i>
							<span className="text-base">
								HTML5
							</span>
						</div>
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-css3-plain"></i>
							<span className="text-base">
								CSS3
							</span>
						</div>
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-git-plain"></i>
							<span className="text-base">
								Git
							</span>
						</div>
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-mysql-original"></i>
							<span className="text-base">
								MySQL
							</span>
						</div>
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-microsoftsqlserver-plain"></i>
							<span className="text-base">
								SQLServer
							</span>
						</div>
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-azure-plain"></i>
							<span className="text-base">
								Azure
							</span>
						</div>
						<div className="flex flex-col text-nowrap justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-visualstudio-plain"></i>
							<span className="text-base">
								Visual Studio
							</span>
						</div>
						<div className="flex flex-col justify-center items-center md:w-auto md:p-0 w-1/3 p-4">
							<i class="devicon-vscode-plain"></i>
							<span className="text-base">
								VS Code
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}