"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[83045],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(n),m=l,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40226:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],p={id:"client-libraries-cpp",title:"The Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},s=void 0,o={unversionedId:"client-libraries-cpp",id:"version-2.2.0/client-libraries-cpp",title:"The Pulsar C++ client",description:"Supported platforms",source:"@site/versioned_docs/version-2.2.0/client-libraries-cpp.md",sourceDirName:".",slug:"/client-libraries-cpp",permalink:"/docs/2.2.0/client-libraries-cpp",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.2.0/client-libraries-cpp.md",tags:[],version:"2.2.0",frontMatter:{id:"client-libraries-cpp",title:"The Pulsar C++ client",sidebar_label:"C++",original_id:"client-libraries-cpp"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"Python",permalink:"/docs/2.2.0/client-libraries-python"},next:{title:"WebSocket",permalink:"/docs/2.2.0/client-libraries-websocket"}},c=[{value:"Supported platforms",id:"supported-platforms",children:[],level:2},{value:"Linux",id:"linux",children:[{value:"Install",id:"install",children:[{value:"RPM",id:"rpm",children:[],level:4},{value:"DEB",id:"deb",children:[],level:4}],level:3},{value:"Build",id:"build",children:[{value:"RPM",id:"rpm-1",children:[],level:4},{value:"Deb",id:"deb-1",children:[],level:4}],level:3}],level:2},{value:"MacOS",id:"macos",children:[],level:2},{value:"Connection URLs",id:"connection-urls",children:[],level:2},{value:"Consumer",id:"consumer",children:[],level:2},{value:"Producer",id:"producer",children:[],level:2},{value:"Authentication",id:"authentication",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"supported-platforms"},"Supported platforms"),(0,r.kt)("p",null,"The Pulsar C++ client has been successfully tested on ",(0,r.kt)("strong",{parentName:"p"},"MacOS")," and ",(0,r.kt)("strong",{parentName:"p"},"Linux"),"."),(0,r.kt)("h2",{id:"linux"},"Linux"),(0,r.kt)("h3",{id:"install"},"Install"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since the 2.1.0 release, Pulsar ships pre-built RPM and Debian packages. You can choose to download\nand install those packages instead of building them yourself.")),(0,r.kt)("h4",{id:"rpm"},"RPM"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Link"),(0,r.kt)("th",{parentName:"tr",align:null},"Crypto files"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"@pulsar:rpm:client@"},"client")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"@pulsar:rpm:client@.asc"},"asc"),", ",(0,r.kt)("a",{parentName:"td",href:"@pulsar:rpm:client@.sha512"},"sha512"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"@pulsar:rpm:client-debuginfo@"},"client-debuginfo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"@pulsar:rpm:client-debuginfo@.asc"},"asc"),",  ",(0,r.kt)("a",{parentName:"td",href:"@pulsar:rpm:client-debuginfo@.sha512"},"sha512"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"@pulsar:rpm:client-devel@"},"client-devel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"@pulsar:rpm:client-devel@.asc"},"asc"),",  ",(0,r.kt)("a",{parentName:"td",href:"@pulsar:rpm:client-devel@.sha512"},"sha512"))))),(0,r.kt)("p",null,"To install a RPM package, download the RPM packages and install them using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ rpm -ivh apache-pulsar-client*.rpm\n\n")),(0,r.kt)("h4",{id:"deb"},"DEB"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Link"),(0,r.kt)("th",{parentName:"tr",align:null},"Crypto files"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"@pulsar:deb:client@"},"client")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"@pulsar:deb:client@.asc"},"asc"),", ",(0,r.kt)("a",{parentName:"td",href:"@pulsar:deb:client@.sha512"},"sha512"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"@pulsar:deb:client-devel@"},"client-devel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"@pulsar:deb:client-devel@.asc"},"asc"),",  ",(0,r.kt)("a",{parentName:"td",href:"@pulsar:deb:client-devel@.sha512"},"sha512"))))),(0,r.kt)("p",null,"To install a DEB package, download the DEB packages and install them using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ apt-install apache-pulsar-client*.deb\n\n")),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you want to build RPM and Debian packages off latest master, you can follow the instructions\nbelow to do so. All the instructions are run at the root directory of your cloned Pulsar\nrepo.")),(0,r.kt)("p",null,"There are recipes that build RPM and Debian packages containing a\nstatically linked ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a")," with all the required\ndependencies."),(0,r.kt)("p",null,"To build the C++ library packages, first build the Java packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nmvn install -DskipTests\n\n")),(0,r.kt)("h4",{id:"rpm-1"},"RPM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-client-cpp/pkg/rpm/docker-build-rpm.sh\n\n")),(0,r.kt)("p",null,"This will build the RPM inside a Docker container and it will leave the RPMs\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp/pkg/rpm/RPMS/x86_64/"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Package name"),(0,r.kt)("th",{parentName:"tr",align:null},"Content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client"),(0,r.kt)("td",{parentName:"tr",align:null},"Shared library ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.so"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client-devel"),(0,r.kt)("td",{parentName:"tr",align:null},"Static library ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.a")," and C++ and C headers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client-debuginfo"),(0,r.kt)("td",{parentName:"tr",align:null},"Debug symbols for ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.so"))))),(0,r.kt)("h4",{id:"deb-1"},"Deb"),(0,r.kt)("p",null,"To build Debian packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-client-cpp/pkg/deb/docker-build-deb.sh\n\n")),(0,r.kt)("p",null,"Debian packages will be created at ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client-cpp/pkg/deb/BUILD/DEB/")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Package name"),(0,r.kt)("th",{parentName:"tr",align:null},"Content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client"),(0,r.kt)("td",{parentName:"tr",align:null},"Shared library ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.so"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulsar-client-dev"),(0,r.kt)("td",{parentName:"tr",align:null},"Static library ",(0,r.kt)("inlineCode",{parentName:"td"},"libpulsar.a")," and C++ and C headers")))),(0,r.kt)("h2",{id:"macos"},"MacOS"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," supplied recipe to build the Pulsar\nclient lib on MacOS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nbrew install https://raw.githubusercontent.com/apache/pulsar/master/pulsar-client-cpp/homebrew/libpulsar.rb\n\n")),(0,r.kt)("p",null,"If using Python 3 on MacOS, add the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--with-python3")," to the above command."),(0,r.kt)("p",null,"This will install the package with the library and headers."),(0,r.kt)("h2",{id:"connection-urls"},"Connection URLs"),(0,r.kt)("p",null,"To connect to Pulsar using client libraries, you need to specify a Pulsar protocol URL."),(0,r.kt)("p",null,"Pulsar protocol URLs are assigned to specific clusters, use the pulsar URI scheme and have a default port of 6650. Here\u2019s an example for localhost:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar://localhost:6650\n\n")),(0,r.kt)("p",null,"A URL for a production Pulsar cluster may look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar://pulsar.us-west.example.com:6650\n\n")),(0,r.kt)("p",null,"If you\u2019re using TLS authentication, the URL will look like something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"\npulsar+ssl://pulsar.us-west.example.com:6651\n\n")),(0,r.kt)("h2",{id:"consumer"},"Consumer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\n\nConsumer consumer;\nResult result = client.subscribe("my-topic", "my-subscribtion-name", consumer);\nif (result != ResultOk) {\n    LOG_ERROR("Failed to subscribe: " << result);\n    return -1;\n}\n\nMessage msg;\n\nwhile (true) {\n    consumer.receive(msg);\n    LOG_INFO("Received: " << msg\n            << "  with payload \'" << msg.getDataAsString() << "\'");\n\n    consumer.acknowledge(msg);\n}\n\nclient.close();\n\n')),(0,r.kt)("h2",{id:"producer"},"Producer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'\nClient client("pulsar://localhost:6650");\n\nProducer producer;\nResult result = client.createProducer("my-topic", producer);\nif (result != ResultOk) {\n    LOG_ERROR("Error creating producer: " << result);\n    return -1;\n}\n\n// Publish 10 messages to the topic\nfor (int i = 0; i < 10; i++){\n    Message msg = MessageBuilder().setContent("my-message").build();\n    Result res = producer.send(msg);\n    LOG_INFO("Message sent: " << res);\n}\nclient.close();\n\n')),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\nClientConfiguration config = ClientConfiguration();\nconfig.setUseTls(true);\nconfig.setTlsTrustCertsFilePath("/path/to/cacert.pem");\nconfig.setTlsAllowInsecureConnection(false);\nconfig.setAuth(pulsar::AuthTls::create(\n            "/path/to/client-cert.pem", "/path/to/client-key.pem"););\n\nClient client("pulsar+ssl://my-broker.com:6651", config);\n\n')))}d.isMDXComponent=!0}}]);