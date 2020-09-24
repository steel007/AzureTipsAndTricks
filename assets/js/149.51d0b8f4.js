(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{439:function(e,t,a){"use strict";a.r(t);var s=a(43),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🦄 Checkout my "),a("a",{attrs:{href:"https://twitch.tv/mbcrump?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitch Azure Developer Streaming"),a("OutboundLink")],1),e._v("!")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=brhxU_kt2HI&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=2&t=101s",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use Azure Dev Spaces to collaborate with a team on Kubernetes"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/dev-spaces/about?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Dev Spaces"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"working-with-a-team-on-a-container-based-solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-a-team-on-a-container-based-solution","aria-hidden":"true"}},[e._v("#")]),e._v(" Working with a team on a container-based solution")]),e._v(" "),a("p",[e._v("This is part 3 of a 3-part series about "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/dev-spaces/about?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Dev Spaces"),a("OutboundLink")],1),e._v(". In part 1, we learned how to get started with Azure Dev Spaces and in part 2, we developed a multi-service application that runs in multiple containers.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip228.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks 228 - Part 1 Get started with .NET Core on Kubernetes with Azure Dev Spaces"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip229.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks 229 - Part 2 Develop multi-service applications on Kubernetes with Azure Dev Spaces"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip230.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks 230 - Part 3 Use Azure Dev Spaces to collaborate with a team on Kubernetes"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("So far, we have been the only developer for the solution. But often, we would be working on a solution in a team of multiple developers. Working on containers in a team can be difficult. Traditionally, each developer would have to create a local development environment and run all containers that make up the solution locally. Or you would set up a separate environment in Azure and use that for development. Both options require a lot of resources and maintenance and make it difficult to stay in sync with the work of the team.")]),e._v(" "),a("p",[e._v("Azure Dev Spaces offers a solution for working with a team on a container-based solution. It provides the concept of a "),a("strong",[e._v("space")]),e._v(", which allows you to work in isolation, and without the fear of breaking your team members.")]),e._v(" "),a("p",[e._v("Here is how it works: In Kubernetes (in our case, "),a("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service"),a("OutboundLink")],1),e._v(", you can have multiple namespaces. Within a namespace you can deploy and run many services that make up a complete solution. In this case, our solution consists of the "),a("strong",[e._v("webfrontend")]),e._v(" that calls the "),a("strong",[e._v("mywebapi")]),e._v(". They are both in the namespace called "),a("strong",[e._v("dev")]),e._v(". When I want to work on the "),a("strong",[e._v("mywebapi")]),e._v(" service, without disrupting the rest of the team, I can set up a new namespace called "),a("strong",[e._v("tipsandtricks")]),e._v(" and run the "),a("strong",[e._v("mywebapi")]),e._v(" in there and make changes. Now, I can call the changed "),a("strong",[e._v("mywebapi")]),e._v(" from the "),a("strong",[e._v("webfrontend")]),e._v(" in the dev namespace, because Azure Dev Spaces routes everything together for me. Azure Dev Spaces is the magic ingredient that makes this easy. And because Azure Dev Spaces is enabled for these namespaces, we simply call them "),a("strong",[e._v("spaces")]),e._v(" from now on. Let's try it out.")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),a("ul",[a("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"https://dotnet.microsoft.com/download?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core SDK"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("The latest version of "),a("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Execute all the steps of "),a("strong",[e._v("part 1 - Get started with .NET Core on Kubernetes with Azure Dev Spaces")]),e._v(" and "),a("strong",[e._v("part 2 - Develop multi-service applications on Kubernetes with Azure Dev Spaces")])])]),e._v(" "),a("h4",{attrs:{id:"set-up-a-baseline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-baseline","aria-hidden":"true"}},[e._v("#")]),e._v(" Set up a baseline")]),e._v(" "),a("p",[e._v("If you have followed the steps in part 1 and 2 of this series, you are already running the "),a("strong",[e._v("webfrontend")]),e._v(" and "),a("strong",[e._v("mywebapi")]),e._v(" in a namespace called "),a("strong",[e._v("default")]),e._v(". We are going to create a new space called "),a("strong",[e._v("dev")]),e._v(", that we will use as the baseline for our development. This will be the place that contains the latest, stable version of the services, that everybody in the team uses.")]),e._v(" "),a("ol",[a("li",[e._v("You should have the "),a("a",{attrs:{href:"https://github.com/Azure/dev-spaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Dev Spaces sample application"),a("OutboundLink")],1),e._v(" on your local machine. Clone or download it if you don't have it anymore")]),e._v(" "),a("li",[e._v("Open a command prompt and enter the following command to create the "),a("strong",[e._v("dev")]),e._v(" space:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("azds space select --name dev\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("When you are asked to select a parent space, select "),a("strong",[e._v("<none>")])]),e._v(" "),a("li",[e._v("Now navigate to the "),a("strong",[e._v("webfrontend")]),e._v(" directory (located in the sample application at "),a("strong",[e._v("samples/dotnetcore/getting-started/webfrontend")]),e._v(") and execute the following command to deploy the app to the dev space:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("azds up -d\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Navigate to the "),a("strong",[e._v("mywebapi")]),e._v(" directory and execute the following command again:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("azds up -d\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The baseline is now set up in the "),a("strong",[e._v("dev")]),e._v(" space. You can check to see what the URI of the webfrontend in the dev space is by executing:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("azds list-uris\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The result will look like this:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/31baseline.png")}}),e._v(" "),a("p",[e._v("(The URIs of the services in dev)")]),e._v(" "),a("h4",{attrs:{id:"develop-and-test-in-your-own-space"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#develop-and-test-in-your-own-space","aria-hidden":"true"}},[e._v("#")]),e._v(" Develop and test in your own space")]),e._v(" "),a("p",[e._v("Now that we have a baseline, we can set up our own space to work in:")]),e._v(" "),a("ol",[a("li",[e._v("In the command prompt, create a new space by executing the following:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("azds space select --name tipsandtricks\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("When asked if you want to select a parent space, select the "),a("strong",[e._v("dev")]),e._v(" space")]),e._v(" "),a("li",[e._v("Open the "),a("strong",[e._v("mywebapi")]),e._v(" directory in "),a("strong",[e._v("VS Code")]),e._v(" and navigate to the "),a("strong",[e._v("ValuesController.cs")]),e._v(" file.")]),e._v(" "),a("li",[e._v("In the ValuesController, change the "),a("strong",[e._v("Get(int id)")]),e._v(" method to this:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    public string Get(int id)\n    {\n        return "The API says something new";\n    }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Now run the API by pressing "),a("strong",[e._v("F5")]),e._v(" or typing "),a("strong",[e._v("azds up")]),e._v(" in the terminal window of VS Code")])]),e._v(" "),a("p",[e._v("The new version of mywebapi is now deployed to the "),a("strong",[e._v("dev/tipsandtricks")]),e._v(" space. You can see that it is running and what the URIs look like by executing "),a("strong",[e._v("azds list-up")]),e._v(" and "),a("strong",[e._v("azds list-uris")]),e._v(", like in the image below:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/31afterchange.png")}}),e._v(" "),a("p",[e._v("(The list of services and URIs after changing the mywebapi)")]),e._v(" "),a("p",[e._v("Mywebapi is now running in the "),a("strong",[e._v("dev/tipsandtricks")]),e._v(" space. The version running in "),a("strong",[e._v("dev")]),e._v(" is still running but it is not listed. And the public access point URL for webfrontend is prefixed with "),a("strong",[e._v("tipsandtricks.s")]),e._v(". This URL is unique to the "),a("strong",[e._v("dev/tipsandtricks")]),e._v(" space.")]),e._v(" "),a("p",[e._v("Test it out by opening a URL and navigating to the public endpoint of webfrontend (with the tipsandtricks.s prefix). You'll see the results of the changes in mywebapi, like in the image below:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/31result.png")}}),e._v(" "),a("p",[e._v("(The result of the changes in mywebapi)")]),e._v(" "),a("p",[e._v("Now remove "),a("strong",[e._v("tipsandtricks.s")]),e._v(" from the URL and reload the page. Now, you see the "),a("strong",[e._v("baseline version")]),e._v(" of mywebapi that is running in the "),a("strong",[e._v("dev")]),e._v(" space.")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/dev-spaces/about?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Dev Spaces"),a("OutboundLink")],1),e._v(" makes it easy to develop applications on "),a("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes"),a("OutboundLink")],1),e._v(". It creates a fast develop-deploy-debug cycle and it removes the need to create an elaborate local development infrastructure. And Azure Dev Spaces also works very well for developers working in teams, because its concept of spaces and because its routing features make it easy to work in isolation without having a complete environment or mocking dependencies. You can learn more about "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/dev-spaces/how-dev-spaces-works?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("how Azure Dev Spaces works here"),a("OutboundLink")],1),e._v(". Go and check it out!")])])},[],!1,null,null,null);t.default=r.exports}}]);