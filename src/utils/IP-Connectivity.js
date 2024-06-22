export const IPConnectivity = [
  {
    id: 1,
    question:
      "Your company network has two offices (HQ and Branch) connected over a VPN tunnel. The Branch office has a subnet of 10.0.1.0/24 and needs to access a web server at 192.168.1.10 located in the HQ office subnet (192.168.1.0/24). The default gateway at the Branch office points to the VPN tunnel interface.Whlch type of route configuration on the Branch office router would be most appropriate to ensure traffic reaches the web seruer at 192.168.1.10?",
    options: [
      "dynamic routing protocol like OSPF",
      "default route pointing to the HQ office router",
      "static route for the 192.168.1.0/24 network with the next hop as the VPN tunnel interface",
      "route configuration is needed, traffic will flow automatically through the VPN.",
    ],
    answer:
      "static route for the 192.168.1.0/24 network with the next hop as the VPN tunnel interface",
  },
  {
    id: 2,
    question:
      "What is the primary purpose of a default route in a routing table?",
    options: [
      "To define the path for all traffic destined for the local network",
      "To specify the next hop for any destination network not explicitly listed in the routing table",
      "To control the maximum number of hops a packet can take before being discarded",
      "To assign IP addresses to devices on the local network",
    ],
    answer:
      "To specify the next hop for any destination network not explicitly listed in the routing table",
  },
  {
    id: 3,
    question:
      "What is the main difference between a static route and a route learned through a dynamic routing protocol ?",
    options: [
      "Static routes are more secure.",
      "Static routes are manually configured, while dynamic routes are learned automatically.",
      "Static routes expire after a certain time, while dynamic routes are persistent.",
      "Static routes are used for local networks, while dynamic routes are for wide-area networks (WANs).",
    ],
    answer:
      "Static routes are manually configured, while dynamic routes are learned automatically.",
  },
  {
    id: 4,
    question:
      "When redistributing OSPF routes into BGP. what is the main concern to address for scalability",
    options: [
      "Increased bandwidth consumption due to large routing tables.",
      "Security vulnerabilities introduced by combining routing protocols",
      "Complex configuration for neighbor peering in BGP.",
      "Difficulty troubleshooting routing loops between OSPF and BGP.",
    ],
    answer: "Increased bandwidth consumption due to large routing tables.",
  },
  {
    id: 5,
    question: "A network prefix is used to differentiate between:",
    options: [
      "Individual devices on a network",
      "The network itself and the devices connected to it",
      "Different types of network traffic (e.g., voice vs. data)",
      "Public and private IP addresses",
    ],
    answer: "The network itself and the devices connected to it",
  },
  {
    id: 6,
    question:
      "Your network consists of three routers: Router A, Router B, and Router C. Router A has a connection to the internet and needs to route packets to a specific subnet (10.0.1.0/24) that is connected to Router C. Router B sits between Router A and Router C. For Router A to successfully route packets to the 10.0.1.0/24 subnet. What information should be configured in its routing table for the 10.0.1.0/24 network?",
    options: [
      "The IP address of Router C",
      "The subnet mask for the 10.0.1.0/24 network",
      "The interface connected to the internet",
      "The next hop IP address on Router B that leads to the 10.0.1.0/24 subnet",
    ],
    answer:
      "The next hop IP address on Router B that leads to the 10.0.1.0/24 subnet",
  },
  {
    id: 7,
    question:
      "In CIDR notation, a /24 prefix on the network address 192.168.1.0 signifies:",
    options: [
      "All addresses from 192.168.1.0 to 192.168.1.255 belong to the same network.",
      "Only the address 192.168.1.24 is usable.",
      "The network can accommodate a maximum of 254 devices.",
      "It's a reserved address block.",
    ],
    answer:
      "All addresses from 192.168.1.0 to 192.168.1.255 belong to the same network.",
  },
  {
    id: 8,
    question:
      "Your network uses two routing protocols: OSPF (default administrative distance 110) and RIP (default administrative distance 120). Router A receives routing information for the same destination network (10.0.1.0/24) from both OSPF and RIP. Assuming no other factors are involved (e.g., metrics within a protocol),which route for the 10.0.1.0/24 network will Router A include in its routing table?",
    options: [
      "The route learned from OSPF",
      "The route learned from RIP",
      "Router A Will alternate between the two routes",
      "Router A needs additional configuration to choose",
    ],
    answer: "The route learned from OSPF",
  },
  {
    id: 9,
    question:
      "What does administrative distance signify in a routing protocol?",
    options: [
      "The physical distance between two routers in a network",
      "The reliability and trustworthiness of a routing source",
      "The number of hops a packet has taken to reach its destination",
      "The maximum time a route can be considered valid before being refreshed",
    ],
    answer: "The reliability and trustworthiness of a routing source",
  },
  {
    id: 10,
    question:
      "What is the primary function of a network mask in an IP address?",
    options: [
      "To define the maximum transmission unit(MTU) for a network",
      "To differentiate between the network portion and the host portion of an IP address",
      "To encrypt data packets traveling across the network",
      "To assign unique identifiers to specific applications",
    ],
    answer:
      "To differentiate between the network portion and the host portion of an IP address",
  },
  {
    id: 11,
    question:
      "You are configuring BGP on a border router to advertise OSPF routes to external networks. However, you want to optimize BGP routing table size and avoid unnecessary advertisements. Describe two methods you can use to achieve this",
    options: [
      "Before redistributing OSPF routes into BGP, configure route summarization. This combines mutliple specific OSPF prefixes into a single, more general prefix for a larger network range.",
      "This reduces the number of routes advertised to BGP, improving scalability and reducing bandwidth consumption.",
      "Utilize route maps to control which OSPF routes are redistributed into BGP",
      "all the options are correct",
    ],
    answer: "all the options are correct",
  },
  {
    id: 12,
    question:
      "Your network consists of three offices (HQ, Branch A, and Branch B) connected by a central router. HQ uses a different OSPF area (Area O) for administrative purposes. Branch A and Branch B (with a limited number of routers) need to communicate but should not exchange routing Information with HQ. How can you configure OSPF to achieve thIs scenario where Branch A and B can communicate but are isolated from HQ in terms of routing Information exchange?",
    options: [
      "Configure a stub area for Branch A and Branch B.",
      "Configure virtual links between Branch A and Branch B routers.",
      "Configure Branch A and Branch B routers in a separate OSPF process.",
      "No configuration is needed, OSPF Will automatically Isolate areas.",
    ],
    answer: "Configure a stub area for Branch A and Branch B.",
  },
  {
    id: 13,
    question: "What is the primary function of a next hop in a routing table?",
    options: [
      "To identify the destination network itself",
      "To specify the interface on the local router that packets should be forwarded to reach the destination network",
      "To determine the number of hops a packet has taken so far",
      "To define the maximum size of packets allowed on the path to the destination",
    ],
    answer:
      "To specify the interface on the local router that packets should be forwarded to reach the destination network",
  },
  {
    id: 14,
    question:
      "Your company is moving to a new office building With three separate departments: Sales (50 devices), Marketing (30 devices), and Engineering (75 devices). You need to design a subnet scheme to efficiently manage these devices while maintaining some level of network segmentation between departments. The company uses Class C network address block of 192.168.1.0/24.",
    options: [
      "255.255.255.128 (CIDR/25)",
      "255.255.255.224 (CIDR/27)",
      "255.255.255.192 (CIDR/26)",
      "255.255.255.0 (CIDR/24)",
    ],
    answer: "255.255.255.0 (CIDR/24)",
  },
  {
    id: 15,
    question: "What is the primary purpose of OSPF areas in a network?",
    options: [
      "To define different security zones for routing information.",
      "To group routers with similar characteristics for faster convergence.",
      "To simplify route advertisement and reduce traffic on the network backbone",
      "To create separate routing tables for different parts of the network.",
    ],
    answer:
      "To simplify route advertisement and reduce traffic on the network backbone",
  },
];
