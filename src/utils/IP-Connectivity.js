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
];
