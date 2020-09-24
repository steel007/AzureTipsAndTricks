(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{571:function(e,t,r){"use strict";r.r(t);var a=r(43),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Make sure you "),r("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),r("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://channel9.msdn.com/Shows/Azure-Friday/Cognitive-Search-Azure-Search-with-AI?WT.mc_id=ch9-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cognitive Search - Azure Search with AI"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=OQDRNQD1LDk&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=4&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to make your data searchable with Azure Search and AI"),r("OutboundLink")],1)])]),e._v(" "),r("h4",{attrs:{id:"searching-through-data-with-azure-search-and-ai"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#searching-through-data-with-azure-search-and-ai","aria-hidden":"true"}},[e._v("#")]),e._v(" Searching through data with Azure Search and AI")]),e._v(" "),r("p",[e._v("If your app exposes any data to users, you probably need a search feature. And search is traditionally difficult to implement. Users have high expectations of a search feature and expect it to work the same in your app as it works in Bing or Google. If you would have to build a Bing-like search feature, with autocomplete, filtering, sorting and all the other bells and whistles, you would have to spend a lot of time and effort. Luckily, "),r("a",{attrs:{href:"https://azure.microsoft.com/services/search/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Search"),r("OutboundLink")],1),e._v(" provides an easy way to incorporate a search feature into your app. And Azure Search can be enhanced by "),r("a",{attrs:{href:"https://azure.microsoft.com/services/cognitive-services/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cognitive Services"),r("OutboundLink")],1),e._v(" to provide AI capabilities.")]),e._v(" "),r("p",[e._v("In this post, we'll create a simple application with Azure Search that uses AI.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")])]),e._v(" "),r("h4",{attrs:{id:"creating-a-search-index-with-azure-search-and-ai"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-search-index-with-azure-search-and-ai","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating a search index with Azure Search and AI")]),e._v(" "),r("p",[e._v("We'll create an Azure Search instance and a Cognitive Service in Azure that will analyze a sample data source.\nWe will start by creating the Azure Search instance in the Azure portal:")]),e._v(" "),r("ol",[r("li",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),r("li",[e._v("Search for "),r("strong",[e._v("Azure Search")]),e._v(" and click on the result to start creating one\na. This brings you to the create blade of Azure Search\nb. Select a "),r("strong",[e._v("Resource Group")]),e._v(" (or create a new one)\nc. Fill in a "),r("strong",[e._v("URL")]),e._v(" for the service\nd. Select a "),r("strong",[e._v("Location")]),e._v("\ne. Select a "),r("strong",[e._v("Pricing tier")]),e._v("\nf. Click "),r("strong",[e._v("Review + create")]),e._v(" and click "),r("strong",[e._v("Create")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/38createazuresearch.png")}}),e._v(" "),r("p",[e._v("(Create Azure Search blade in the Azure portal)")]),e._v(" "),r("p",[e._v("When the Azure Search instance is created, we can create a search index in it, based on sample data:")]),e._v(" "),r("ol",[r("li",[e._v("In the Azure portal, in the Azure Search overview blade, click on the "),r("strong",[e._v("Import data")]),e._v(" button. This will take you through a wizard to create a search index")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/38importdatabutton.png")}}),e._v(" "),r("p",[e._v("(The import data button in the Azure portal)")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[e._v("The first step of the wizard is to select a data source to perform search on. In the "),r("strong",[e._v("Data Source")]),e._v(" dropdown box, select "),r("strong",[e._v("Samples")]),e._v(" and select "),r("strong",[e._v("realestate-us-sample")]),e._v("\na. This sample data source represents a SQL Database containing example data for real-estate in the United States. "),r("a",{attrs:{href:"https://azure.microsoft.com/resources/samples/azure-search-sample-data/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),r("OutboundLink")],1),e._v(" are some more sample data sources that you can use with Azure Search")])]),e._v(" "),r("li",[r("p",[e._v("Next, we will add "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/search/cognitive-search-concept-intro?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("cognitive search"),r("OutboundLink")],1),e._v(". This enhances Azure Search by adding AI capabilities from Azure Cognitive Services\na. First, "),r("strong",[e._v("attach a Cognitive Service")]),e._v(" by selecting an existing one. If you don't have one yet, click the "),r("strong",[e._v("Create new Cognitive Services")]),e._v(" resource to create one and click "),r("strong",[e._v("Refresh")]),e._v(" once you've created it\nb. In the next step, "),r("strong",[e._v("Add enrichments")]),e._v(", we can create a skillset that enhances the search index:")]),e._v(" "),r("ol",[r("li",[e._v("In the "),r("strong",[e._v("Source data field")]),e._v(", select the "),r("strong",[e._v("description")]),e._v(" field")]),e._v(" "),r("li",[e._v("Select "),r("strong",[e._v("Sentences")]),e._v(" for the "),r("strong",[e._v("Enrichment granularity level")]),e._v(" setting")]),e._v(" "),r("li",[e._v("Select "),r("strong",[e._v("Extract key phrases")]),e._v(", "),r("strong",[e._v("Translate text (to Afrikaans)")]),e._v(" and "),r("strong",[e._v("Detect sentiment")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/38cognitivesearch.png")}}),e._v(" "),r("p",[e._v("(Configure Cognitive search in the Azure portal)")]),e._v(" "),r("p",[e._v("c. Click "),r("strong",[e._v("Next: Customize target index")])])]),e._v(" "),r("li",[r("p",[e._v("In the step to customize the target index, you can tell Azure Search which fields of the data you want to be searchable, which ones you want to sortable, which ones you want to use to filter on and so on. Leave everything as it is and click "),r("strong",[e._v("Next: Create an indexer")])])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/38customizeindex.png")}}),e._v(" "),r("p",[e._v("(Customize the search index in the Azure portal)")]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[e._v("The indexer is a mechanism that creates and maintains the search index. Leave everything as it is and click "),r("strong",[e._v("Submit")]),e._v(" to start creating the index")])]),e._v(" "),r("p",[e._v("The index that we've created uses Azure Cognitive Services to analyze the description text of the data. We've chosen to split that data up into sentences, so that the Cognitive Service can deal with it better. This split does mean that it will take 15 minutes or more to create the search index. In a production scenario, this doesn't matter a lot, because Azure Search would run on multiple replicas an you would update the index of just one of them, leaving the rest available to be queried.")]),e._v(" "),r("p",[e._v("When the index is created, we can test it:")]),e._v(" "),r("ol",[r("li",[e._v("In the Azure portal, in the Azure Search overview blade, click on the "),r("strong",[e._v("Search Explorer")]),e._v(" button. this takes us to an environment where we can query the search index and see what it returns")]),e._v(" "),r("li",[e._v("In Search Explorer, search on "),r("strong",[e._v("medina")]),e._v(" and take a look at the search results. You'll see key phrases that Cognitive Services detected, a translated text in Afrikaans and a sentiment analysis of the sentences of the description. This sentiment in the image below seems to be pretty positive, which is what you would expect from a real-estate listing:")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/38searchresults1.png")}}),e._v(" "),r("p",[e._v("(Search results in the Azure portal)")]),e._v(" "),r("h4",{attrs:{id:"use-the-search-index-in-an-application"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-the-search-index-in-an-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Use the search index in an application")]),e._v(" "),r("p",[e._v("Having the search index ready to be queried is great. But we really want an application to call the Azure Search API to use the search index. There are many ways to implement this including the Azure Search SDK for "),r("a",{attrs:{href:"https://docs.microsoft.com/dotnet/api/overview/azure/search?view=azure-dotnet&WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET"),r("OutboundLink")],1),e._v(" and calling the "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/rest/api/searchservice/Search-Documents?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST API"),r("OutboundLink")],1),e._v(" directly. We can also use "),r("a",{attrs:{href:"https://github.com/EvanBoyle/AzSearch.js?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("helper libraries"),r("OutboundLink")],1),e._v(" to generate a search UI for us. Let's try that:")]),e._v(" "),r("ol",[r("li",[e._v("Go to http://azsearchstore.azurewebsites.net/azsearchgenerator/index.html. This is a helper app that can generate a search UI for us. Eventually, this capability will be available in the Azure portal")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/38generateapp.png")}}),e._v(" "),r("p",[e._v("(AzSearch Generator)")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[e._v("Fill in the "),r("strong",[e._v("Query Key")]),e._v(" value. You can get this by either using a read/write Key or generating a Query-only Key in the "),r("strong",[e._v("Keys menu")]),e._v(" of the Azure Search instance")])]),e._v(" "),r("li",[r("p",[e._v("Go to the Azure Search instance in the Azure portal and open the search index that we've created earlier. Click on the "),r("strong",[e._v("CORS tab")]),e._v(". We need to allow the UI that will be generated to access the search index\na. Select "),r("strong",[e._v("All")]),e._v(" for the "),r("strong",[e._v("Allowed origin type")]),e._v("\nb. Click "),r("strong",[e._v("Save")]),e._v(" to save the CORS setting")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/38cors.png")}}),e._v(" "),r("p",[e._v("(CORS setting in the Azure portal)")])]),e._v(" "),r("li",[r("p",[e._v("Still in the search index in the Azure portal, click on the "),r("strong",[e._v("Index Definition (JSON) tab")]),e._v("\na. "),r("strong",[e._v("Copy")]),e._v(" all the JSON content\nb. Go to the UI search generator website and paste the JSON content into the "),r("strong",[e._v("Azure Search index JSON")]),e._v(" field")])]),e._v(" "),r("li",[r("p",[e._v("In the UI search generator website, fill in the name of the Azure Search instance in the "),r("strong",[e._v("Service Name")]),e._v(" field")])]),e._v(" "),r("li",[r("p",[e._v("Click "),r("strong",[e._v("Generate App")]),e._v(". This will generate a HTML file")])]),e._v(" "),r("li",[r("p",[e._v("Open the generated HTML file. This is a UI that talks to your search index and uses common UI elements to enhance your search experience. Search for "),r("strong",[e._v("medina")]),e._v(" to see how the UI behaves. You can use this HTML file to integrate the search experience into your app. You can also make it a lot more appealing by tweaking it slightly. Take a look at "),r("a",{attrs:{href:"http://azsearchstore.azurewebsites.net/realestate.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("this sample website"),r("OutboundLink")],1),e._v(" to see an enhanced example")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/38searchresults.png")}}),e._v(" "),r("p",[e._v("(Search results in the generated HTML file)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Creating compelling search experiences is hard. "),r("a",{attrs:{href:"https://azure.microsoft.com/services/search/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Search"),r("OutboundLink")],1),e._v(" provides search-as-a-service and makes it easy to "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/search/cognitive-search-concept-intro?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("let AI analyze your data and enhance your results"),r("OutboundLink")],1),e._v(". Go and check it out!")])])},[],!1,null,null,null);t.default=n.exports}}]);