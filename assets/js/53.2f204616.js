(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{378:function(e,t,n){"use strict";n.r(t);var o=n(18),a=function(e){e.options.__data__block__={mermaid_1a962853:"graph LR;\nA(PC) -.- B(Firewall);\nB -.-> C (off-wall website);\nA --\x3e D(V2Ray/VPS);\nD --\x3e C;\nA --\x3e E (in-wall website);\n",mermaid_382ee14e:"graph LR;\nA(PC) -.-> B(Firewall);\nB -.-> C (off-wall website);\nA --\x3e D (VPS in the wall);\nD --\x3e E (VPS outside the wall);\nE --\x3e C;\nD --\x3e F (in-wall website);\n",mermaid_382ee16a:"graph LR;\nA1(inbound) --\x3e D(Dispatcher / Router / DNS);\nA2(inbound) --\x3e D;\nA3(inbound) --\x3e D;\nA4(inbound) --\x3e D;\nD --\x3e B1(outbound);\nD --\x3e B2(outbound);\nD --\x3e B3(outbound);\nD --\x3e B4(outbound);\n"}},r=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"working-mechanism"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#working-mechanism"}},[e._v("#")]),e._v(" Working Mechanism")]),e._v(" "),n("h2",{attrs:{id:"single-server-mode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#single-server-mode"}},[e._v("#")]),e._v(" Single server mode")]),e._v(" "),n("p",[e._v("Like other network proxy tools, you need a server configured with V2Ray, and then install and configure the V2Ray client on your device, and then you can smoothly access the Internet.")]),e._v(" "),n("Mermaid",{attrs:{id:"mermaid_1a962853",graph:e.$dataBlock.mermaid_1a962853}}),n("p",[e._v("A V2Ray server can simultaneously support multiple devices to access using different proxy protocols. At the same time, after reasonable configuration, V2Ray can identify and distinguish between the traffic that needs a proxy and the traffic that does not require a proxy. Directly connected traffic does not require detours.")]),e._v(" "),n("h2",{attrs:{id:"bridge-mode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bridge-mode"}},[e._v("#")]),e._v(" Bridge mode")]),e._v(" "),n("p",[e._v("If you don't want to configure routing on every device, you can also set up a transit server to receive all the traffic sent by the client, and then forward the judgment in the server.")]),e._v(" "),n("Mermaid",{attrs:{id:"mermaid_382ee14e",graph:e.$dataBlock.mermaid_382ee14e}}),n("h2",{attrs:{id:"working-principle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#working-principle"}},[e._v("#")]),e._v(" working principle")]),e._v(" "),n("p",[e._v("Before configuring V2Ray, let’s take a look at the working principle of V2Ray. The following is a schematic diagram of the internal structure of a single V2Ray process. Multiple V2Rays are independent of each other and do not affect each other.")]),e._v(" "),n("Mermaid",{attrs:{id:"mermaid_382ee16a",graph:e.$dataBlock.mermaid_382ee16a}}),n("ul",[n("li",[e._v("You need to configure at least one inbound protocol (Inbound) and one outbound protocol (Outbound) to work properly.\n"),n("ul",[n("li",[e._v("The inbound protocol is responsible for communicating with the client (such as a browser):\n"),n("ul",[n("li",[e._v("Inbound protocols can usually configure user authentication, such as ID and password;")]),e._v(" "),n("li",[e._v("After the inbound protocol receives the data, it will be handed over to the Dispatcher for distribution;")])])]),e._v(" "),n("li",[e._v("The outbound protocol is responsible for sending data to the server, such as V2Ray on another host.")])])]),e._v(" "),n("li",[e._v("When there are multiple outbound protocols, routing can be configured to specify that a certain type of traffic is sent by a certain outbound protocol.\n"),n("ul",[n("li",[e._v("When necessary, the router will query the DNS for more information to make a judgment.")])])])]),e._v(" "),n("p",[e._v("The specific configuration format is detailed in "),n("RouterLink",{attrs:{to:"/en_US/config/overview.html"}},[e._v("Chapter 2")]),e._v(".")],1)],1)}),[],!1,null,null,null);"function"==typeof a&&a(r);t.default=r.exports}}]);