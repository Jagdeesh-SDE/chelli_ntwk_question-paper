export const allQuestions = [
  {
    id: 1,
    question:
      "How many times can you perform leading zero compression in a single IPV6 address?",
    options: [
      "As often as you like",
      "Only once",
      "Twice",
      "You cannot perform this type of compression in an IPV6 address",
    ],
    answer: "Only once",
  },
  {
    id: 2,
    question:
      "Which layer of the OSI model is responsible for specifying the encapsulation method used for specific types of media?",
    options: ["Application", "Transport", "Physical", "Datalink"],
    answer: "Datalink",
  },
  {
    id: 3,
    question:
      "Which layer of the OSI model is included in the Internet layer of the TCP/IP model ?",
    options: ["Network", "Application", "Transport", "Datalink"],
    answer: "Network",
  },
  {
    id: 4,
    question:
      "What are the two services performed by the data link layer of the OSI model?",
    options: [
      "It encrypts data packets",
      "It determtnes the path to forward packets",
      "It accepts Layer 3 packets and encapsulates them into frames",
      "It provides media access control and performs error detection",
    ],
    mutlipleAnswers: true,
    answer: [
      "It accepts Layer 3 packets and encapsulates them into frames",
      "It provides media access control and performs error detection",
    ],
  },
  {
    id: 5,
    question:
      "What two application layer protocols are part of TCP/IP protcol suite? (Choose two)",
    options: ["ARP", "FTP", "DNS", "NAT"],
    mutlipleAnswers: true,
    answer: ["FTP", "DNS"],
  },
  {
    id: 6,
    question:
      "In which CLI configuration mode can you configure the hostname of a device?",
    options: ["Line", "Interface", "Global", "Router"],
    answer: "Global",
  },
  {
    id: 7,
    question:
      "Which type of topology requires less cabling as compared to Mesh and still provides good protection(data can flow from other side, if on elink is broken)?",
    options: [
      "Ring Network Topology",
      "Bus Network Topology",
      "Star Network Topology",
      "Point to Point Network Topology",
    ],
    answer: "Point to Point Network Topology",
  },
  {
    id: 8,
    question:
      "At which layer of the OSI model would a logical address be encapsulated?",
    options: [
      "Physical Layer",
      "Network Layer",
      "Data link Layer",
      "Transport Layer",
    ],
    answer: "Network Layer",
  },
  {
    id: 9,
    question:
      "Which of the following layers of the OSI model is responsible for user interaction?",
    options: ["Layer 4", "Layer 5", "Layer 6", "Layer 7"],
    answer: "Layer 7",
  },
  {
    id: 10,
    question:
      "which PDU is processed when a host computer is de-encapsulating a message at the transport layer of the TCP/IP model?",
    options: ["Bits", "Frame", "Packet", "Segment"],
    answer: "Segment",
  },
  {
    id: 11,
    question:
      "What method can be used by two computers to ensure that packets are not dropped because too much data is being sent too quickly?",
    options: [
      "Encapsulation",
      "Flow control",
      "Access method",
      "Response timeout",
    ],
    answer: "Flow control",
  },
  {
    id: 12,
    question:
      "Which type of Network Topology is most common to avoid Layer-2 network loops?",
    options: [
      "Ring Network Topology",
      "Tree Network Topology",
      "Star Network Topology",
      "Bus Network Topology",
    ],
    answer: "Tree Network Topology",
  },
  {
    id: 13,
    question:
      "You suspect a router interface is malfunctioning. In which mode can you verify its status?",
    options: [
      "Privileged Mode",
      "Global Configuration Mode",
      "User Mode",
      "ROM Monitor Mode",
    ],
    answer: "User Mode",
  },
  {
    id: 14,
    question:
      "WAN technologies, such as X.25 and ATM, would use what layer of the OSI model?",
    options: [
      "Application layer",
      "Transport layer",
      "Network Layer",
      "Datalink",
    ],
    answer: "Network Layer",
  },
  {
    id: 15,
    question:
      "what process is used to place one message inside another message for transfer from the source to the destination?",
    options: ["Access Control", "Decoding", "Encapsulation", "Flow Control"],
    answer: "Encapsulation",
  },
  {
    id: 16,
    question:
      "Which PDU format is used when bits are received from the network medium by the NIC of a host?",
    options: ["File", "Frame", "Packet", "Segment"],
    answer: "Frame",
  },
  {
    id: 17,
    question:
      "A router is connected to switch with a Single link. Which inter-VLAN method is used here ?",
    options: [
      "ROAST",
      "Router With sub-interfaces",
      "Router with multiple interfaces",
      "Switch Virtual interfaces",
    ],
    mutlipleAnswers: true,
    answer: ["ROAST", "Router With sub-interfaces"],
  },
  {
    id: 18,
    question: "Calculate the valid number of hosts in 192.0.0.22/24",
    options: ["256", "65536", "254", "65534"],
    answer: "254",
  },
  {
    id: 19,
    question: "Which class is used for research purposes?",
    options: ["class C", "class A", "class D", "class E"],
    answer: "class E",
  },
  {
    id: 20,
    question: "Find the network address for 172.165.56.35/27?",
    options: [
      "172.165.56.32",
      "172.165.56.33",
      "172.165.56.63",
      "173.165.56.32",
    ],
    answer: "172.165.56.32",
  },
  {
    id: 21,

    question:
      "Which of the following statements is true about the ping command?",
    options: [
      "The ping command checks for available printers on the network.",
      "The ping command tests connectivity and measures round-trip time to a specific device using its IP address.",
      "The ping command activates the encryption protocols for secure communication.",
      "The ping command automatically fixes network errors.",
    ],
    answer:
      "The ping command tests connectivity and measures round-trip time to a specific device using its IP address.",
  },
  {
    id: 22,
    question: "What is a requirement for nonoverlapping Wi-Fi channels?",
    options: [
      "different security settings",
      "discontinuous frequency ranges",
      "unique SSIDs",
      "different transmission speeds",
    ],
    answer: "discontinuous frequency ranges",
  },
  {
    id: 23,
    question: "Identify the private address range in Class B",
    options: [
      "10.0.0.0 - 10.255.255.255",
      "172.16.0.0 - 172.31.255.255",
      "192.168.0.0 - 192.168.255.255",
      "173.16.0.0 - 172.31.255.255",
    ],
    answer: "172.16.0.0 - 172.31.255.255",
  },
  {
    id: 24,

    question: "Which of the following is NOT a valid IPv4 address format?",
    options: ["192.168.1.1", "10.0.0.4", "172.16.31.12", "255.255.255.256"],
    answer: "255.255.255.256",
  },
  {
    id: 25,
    question:
      "From the given options, identify core capabilities of cloud (Select TWO CORRECT options)",
    options: [
      "Rapid Elasticity",
      "Reliability",
      "Security",
      "Resource pooling",
    ],
    mutlipleAnswers: true,
    answer: ["Rapid Elasticity", "Reliability", "Security", "Resource pooling"],
  },
  {
    id: 26,
    question: "Name few popular PAAS offerings (Select TWO CORRECT options)",
    options: ["LinkedIn", "Pixlr", "IBM Bluemix", "Google App Engine"],
    mutlipleAnswers: true,
    answer: ["IBM Bluemix", "Google App Engine"],
  },
  {
    id: 29,
    question: "Which layer belongs to SAAS cloud service model?",
    options: [
      "Application and Data",
      "Application and Runtime Environment",
      "Storage and Data",
      "Networking and Operating systems",
    ],
    answer: "Application and Data",
  },
  {
    id: 30,
    question:
      "Which of the following options does not represent cloud service models?",
    options: ["IAAS", "PAAS", "ISP", "SAAS"],
    answer: "ISP",
  },
  {
    id: 31,
    question:
      "A network is configured with VLANs 10, 20, 30, 40 & 50 with at least 1 EUD respectively. Which among the following commands is to be executed to allow traffic of VLANID 10,30 and 50 only in a pc",
    options: [
      "switchport access vlan 10 30 50",
      "switchport mode trunk valn 1-10,30,50",
      "switchport mode trunk allowed VLAN 1-10,30,50",
      "switchport mode access",
    ],
    answer: "switchport mode trunk allowed VLAN 1-10,30,50",
  },
  {
    id: 32,
    question:
      "In a network, 2 host devices are configured to VLAN 1O and VLAN 20 respectively. Which among the following statements is wrong in this scenario ?",
    options: [
      "Hosts can communicate between them only if they are configured under the same VLAN ID",
      "Hosts can communicate between them only if they are configured under Default VLAN ID only",
      "Hosts can communicate between them without any changes",
      "Hosts cant communicate between them in this scenario",
    ],
    answer: "Hosts can communicate between them without any changes",
  },
  {
    id: 33,

    question: "Name few popular PAAS offerings (Select TWO CORRECT options)",
    options: ["LinkedIn", "Pixlr", "IBM Bluemix", "Google App Engine"],
    answer: "IBM Bluemix",
    // answer: ["IBM Bluemix", "Google App Engine"],
  },
  {
    id: 34,
    question:
      "How does a Cisco Unified Wireless Network respond to Wi-Fi channel ovelap?",
    options: [
      "It allows the administrator to assign the channels on a per-device or per-interface basis.",
      "It segregates devices from different manufactures onto different channels.",
      "It analyzes client load and background noise and dynamically assigns a channel.",
      "It alternates automatically between 2.4 GHz and 5 GHz on adjacent access points.",
    ],
    answer:
      "It analyzes client load and background noise and dynamically assigns a channel.",
  },
  {
    id: 35,

    question:
      "Which function forwards frames to ports that have a matching destination MAC address?",
    options: [
      "frame flooding",
      "frame filtering",
      "frame pushing",
      "frame switching",
    ],
    answer: "frame switching",
  },
  {
    id: 36,
    question: "which of the following VLAN IDs fall into the Normal Range?",
    options: ["1001", "1003", "1005", "1007"],
    mutlipleAnswers: true,
    answer: ["1001", "1003", "1005"],
  },
  {
    id: 37,
    question:
      "Which mode should be configured for the ports that are connected to an EUD and a Switch, respectively?",
    options: [
      "Access Mode & Trunk Mode",
      "Trunk Mode & Access Mode",
      "Access Mode & Access Mode",
      "Trunk Mode & Trunk Mode",
    ],
    answer: "Access Mode & Trunk Mode",
  },
  {
    id: 38,
    question: "In which CLI mode. trunk mode can be configured for a port?",
    options: [
      "User Mode",
      "Privilege Mode",
      "Global configuration mode",
      "specific configuration mode",
    ],
    answer: "Global configuration mode",
  },
  {
    id: 39,
    question: "How will a Switch update its MAC-Address Table?",
    options: [
      "Learns from the Destination MAC Address of a Frame with respect to the exit interface",
      "Learns from the Source MAC Address of a Frame with respect to the incoming interface",
      "Learns from the Destination Port Number of a Frame with respect to the exit interface",
      "Learns from the Source Port Number of a Frame with respect to the incoming interface",
    ],
    answer:
      "Learns from the Source MAC Address of a Frame with respect to the incoming interface",
  },
  {
    id: 40,

    question:
      "How does a Cisco Unified Wireless Network respond to Wi-Fi channel overlap?",
    options: [
      "It allows the administrator to assign the channels on a per-device or per-interface basis.",
      "It segregates devices from different manufactures onto different channels.",
      "It analyzes client load and background noise and dynamically assigns a channel.",
      "It alternates automatically between 2.4 GHz and 5 GHz on adjacent access points.",
    ],
    answer:
      "It analyzes client load and background noise and dynamically assigns a channel.",
  },
  {
    id: 41,

    question:
      "Jimmy, a network admin wants to send multiple VLAN traffic between switches. What modes should he configure the switch ports, to achieve this?",
    options: ["Access", "Trunk", "Both A and B", "None A and B"],
    answer: "Trunk",
  },
  {
    id: 42,

    question:
      "What keyword describes the mechanism of a switch used to get the frame to the correct destination device?",
    options: [
      "Advancing",
      "Flooding to the destination",
      "Forwarding",
      "Dropping",
    ],
    answer: "Forwarding",
  },
  {
    id: 43,
    question:
      "A global Enterprise network wants to use VLAN in their projects. Out of the given options which VLAN they can use?",
    options: ["1003", "1002", "1005", "1008"],
    answer: "1008",
  },
  {
    id: 44,
    question: "What are two functions of a Layer 2 switch? (Choose two.)",
    options: [
      "makes forwarding decisions based on the MAC address of a packet",
      "selects the best route between networks on a WAN",
      "moves packets within a VLAN",
      "moves packets between different VLANs",
    ],
    mutlipleAnswers: true,
    answer: [
      "makes forwarding decisions based on the MAC address of a packet",
      "moves packets within a VLAN",
    ],
  },
  {
    id: 45,

    question:
      "What will be the course of action of a Switch, If the MAC Address associated with all the connected interfaces is learned and a new switching request for an unknown destination MAC Address comes in?",
    options: [
      "The switch forwards the packet and adds the destination MAC address to its table",
      "The switch sends a copy of a packet to CPU for destination MAC address learning",
      "The switch floods packets to all interfaces except the receiving interface",
      "The switch drops the received frame",
    ],
    answer:
      "The switch sends a copy of a packet to CPU for destination MAC address learning",
  },
];

export const quizzQuestions = [
  {
    id: 1,
    question:
      "Which of the following statements accurately describes a routing table?",
    options: [
      "A dynamic table in a router that stores information about connected networks and how to reach them.",
      "A static list of websites a user frequently visits.",
      "A table used to calculate the distance between two network devices.",
      "A database containing all IP addresses on the internet.",
    ],
    answer:
      "A dynamic table in a router that stores information about connected networks and how to reach them.",
  },
  {
    id: 2,
    question: "A network mask is used for",
    options: [
      "Specifying the number of usable IP addresses within a subnet.",
      "Creating strong passwords for network devices.",
      "Preventing data corruption during packet transmission.",
      "Filtering incoming email messages.",
    ],
    answer: "Specifying the number of usable IP addresses within a subnet.",
  },
  {
    id: 3,
    question:
      "You suspect an OSPF router is not purging stale entries from its Link-State Database (LSDB). What might be the cause",
    options: [
      "The router is configured as a Designated Router (DR) in its area.",
      "The neighbor relationship with other routers is down.",
      "The administrative distance of a route is set too high.",
      "The network mask of a subnet is incorrect.",
    ],
    answer: "The neighbor relationship with other routers is down.",
  },
  {
    id: 4,
    question:
      "If two OSPF routers have discrepancies in their Link-State Databases, what is a common approach to resolve the issue?",
    options: [
      "Manually configure static routes on both routers.",
      "Restart the OSPF process on one or both routers.",
      "Change the area type of one of the routers.",
      "Increase the HELLO timer interval on the interfaces.",
    ],
    answer: "Restart the OSPF process on one or both routers.",
  },
  {
    id: 5,
    question: "In a routing table entry. the next hop refers to",
    options: [
      "The final destination network for a packet.",
      "The IP address of the router's interface connected to the destination network",
      "The administrative distance of a specific route.",
      "The type of routing protocol used to learn the route.",
    ],
    answer:
      "The IP address of the router's interface connected to the destination network",
  },
  {
    id: 6,
    question: "The gateway of last resort is also known as",
    options: [
      "Primary DNS server.",
      "Default gateway.",
      "Internal routing protocol.",
      "Static route entry.",
    ],
    answer: "Default gateway.",
  },
  {
    id: 7,
    question:
      "Which of the following statements describes packet filtering MOST accurately",
    options: [
      "It inspects the contents of packets to determine whether to allow or block them based on pre-defined rule",
      "It forwards packets based on their destination MAC addresses.",
      "It breaks down large data packets into smaller units for transmission.",
      "It assigns unique IP addresses to devices on a network.",
    ],
    answer:
      "It inspects the contents of packets to determine whether to allow or block them based on pre-defined rule",
  },
  {
    id: 8,
    question: "In a packet-switched network, data is transmitted using",
    options: [
      "Dedicated circuits between sender and receiver.",
      "Packets containing source and destination addresses.",
      "A single. continuous stream of data.",
      "Only wireless communication protocols.",
    ],
    answer: "Packets containing source and destination addresses.",
  },
  {
    id: 9,
    question:
      "When a router has multiple routes to the same destination. it will choose the route based on:",
    options: [
      "The source IP address of the packet.",
      "The type of routing protocol that learned the route.",
      "The higher subnet mask value (more specific network).",
      "The lower administrative distance (more preferred route)",
    ],
    answer: "The lower administrative distance (more preferred route)",
  },
  {
    id: 10,
    question: "A floating static match is a type of static route with",
    options: [
      "lower administrative distance than a default route. making it the preferred path.",
      "A higher administrative distance than a default route. serving as a backup.",
      "No next hop specified, requiring manual packet forwarding.",
      "The ability to dynamically change its destination network.",
    ],
    answer:
      "A higher administrative distance than a default route. serving as a backup.",
  },
  {
    id: 11,
    question: "OSPF Area 0 is",
    options: [
      "A user-defined area for specific network segments.",
      "The mandatory backbone area that all other areas connect to.",
      "An area that cannot exchange routing information with other areas.",
      "Used to isolate stub networks from the backbone.",
    ],
    answer: "The mandatory backbone area that all other areas connect to.",
  },
  {
    id: 12,
    question: "In OSPF, a virtual link is used to",
    options: [
      "Connect two routers within the same area directly.",
      "Connect a router in a non-backbone area to the backbone",
      "Create a redundant path for increased reliability",
      "Allow communication between different OSPF routing protocols-",
    ],
    answer: "Connect a router in a non-backbone area to the backbone",
  },
  {
    id: 13,
    question:
      "A router shows its OSPF neighbor state as '2-way' What could be a potential cause?",
    options: [
      "The routers have compatible Router IDs.",
      "The neighbor relationship is fully established.",
      "The MTU (Maxmum Transmission Unit) sizes on the interfaces don't match.",
      "The HELLO and Dead timers are configured differently on the routers.",
    ],
    answer: "The routers have compatible Router IDs.",
  },
  {
    id: 14,
    question:
      "You suspect an OSPF router is not purging stale entries from its Link-State Database (LSDB). What might be the cause",
    options: [
      "The router is configured as a Designated Router (DR) in its area.",
      "The neighbor relationship with other routers is down.",
      "The admrustrative distance of a route is set too high.",
      "The network mask of a subnet is incorrect.",
    ],
    answer: "The neighbor relationship with other routers is down.",
  },
  {
    id: 15,
    question: "In OSPF, a virtual link is used to",
    options: [
      "Connect two routers within the same area directly.",
      "Connect a router in a non-backbone area to the backbone",
      "Create a redundant path for increased reliability.",
      "Allow communication between different OSPF routing protocols-",
    ],
    answer: "Connect a router in a non-backbone area to the backbone",
  },
  {
    id: 16,
    question: "MD5 authentication in OSPF provides",
    options: [
      "Encryption for data packets traveling between routers.",
      "A mechanism to prevent unauthorized access to the routing process.",
      "A way to optimize routing calculations for faster convergence.",
      "A method for load balancing traffic across multiple paths.",
    ],
    answer:
      "A mechanism to prevent unauthorized access to the routing process.",
  },
  {
    id: 17,
    question:
      "A static route is manually configured by a network administrator to",
    options: [
      "Automatically learn about connected networks through routing protocols.",
      "Define a path to a specific network that is not directly connected.",
      "Securely encrypt data packets for transmission.",
      "Assign unique IP addresses to devices on a network.",
    ],
    answer:
      "Define a path to a specific network that is not directly connected.",
  },
  {
    id: 18,
    question: "A default route serves as",
    options: [
      "A backup path for routes with high administrative distance.",
      "A specific route to a frequently accessed network.",
      "The only route a router can use to forward packets.",
      "A catch-all route for destinations not listed in the routing table.",
    ],
    answer:
      "A catch-all route for destinations not listed in the routing table.",
  },
  {
    id: 19,
    question: "Which of the following commands resets the BGP neighborship?",
    options: [
      "clear ip bgp * soft",
      "clear ip bgp * soft IN",
      "clear iP bgp * soft OUT",
      "clear ip bgp *",
    ],
    answer: "clear ip bgp *",
  },
  {
    id: 20,
    question: "Identify AD value of OSPF and eBGP from the option respectively",
    options: ["110 and 60", "110 and 20", "110 and 30", "110 and40"],
    answer: "110 and 20",
  },
  {
    id: 21,
    question: "In IP routing, a prefix match is used for",
    options: [
      "Identifying the specific device within a network.",
      "Encrypting the contents of a packet for secure transmission.",
      "Matching a network address with a subnet mask to determine the network portion of an IP address.",
      "Calculating the bandwidth required for a data transfer",
    ],
    answer:
      "Matching a network address with a subnet mask to determine the network portion of an IP address.",
  },
  {
    id: 22,
    question:
      "Ray wants to send a file to Bob. In order to connect Ray's Desktop to Bob's Laptop, which cable can be used?",
    options: [
      "Roll Over cable",
      "Cross Over cable",
      "Straight Through cable",
      "Copper Cable",
    ],
    answer: "Cross Over cable",
  },
  {
    id: 23,
    question:
      "In ATOM Llmlted's local area network, IO end user devices are connected to a main switch. Ray Palmer has joined as new employee ir the company and desktop has been assigned to him. Which cable connects Ray's Desktop to the main switch?",
    options: [
      "Straight Through cable",
      "Roll Over cable",
      "Cross Over cable",
      "Fiber Optjc cable",
    ],
    answer: "Straight Through cable",
  },
  {
    id: 24,
    question:
      "Shyam, the network administrator has to perform maintenance activity for ATOM Limited. To connect Bumblebee's PC to the main switch's console, the cable required is",
    options: [
      "Cross Over cable",
      "Roll Over cable",
      "Copper cable",
      "Straight Through cable",
    ],
    answer: "Roll Over cable",
  },
  {
    id: 25,
    question:
      "How is the network layer of the OSI model identified in the TCP/IP modeP",
    options: [
      "Network Access Layer",
      "Transport Layer",
      "Internet Layer",
      "Application Layer",
    ],
    answer: "Internet Layer",
  },
  {
    id: 26,
    question:
      "Jimmy Olsen, Head of Daily Planet Limited wants to send the project specification of his client to the members of his team in manner. Which layer of the OSI model achieves this task?",
    options: ["Session", "Presentation", "APPIication", "Transport"],
    answer: "Presentation",
  },
  {
    id: 27,
    question:
      "The data sent from John's system has 4 possible routes to reach Smith's system. The selection of best route among them happens at which layer of OSI Model ?",
    options: [
      "Transport Layer",
      "Data link Layer",
      "Network layer",
      "Session Layer",
    ],
    answer: "Network layer",
  },
  {
    id: 28,
    question:
      "Smith found the data sent by John is corrupted. Which layer of Model will help him to find this and recover the data?",
    options: [
      "Network Layer",
      "Data link Layer",
      "Transport Layer",
      "Application Layer",
    ],
    answer: "Transport Layer",
  },
  {
    id: 29,
    question:
      "When John sends data to Smith, which layer of OSI model delivers the data to Smith's desktop?",
    options: [
      "Data link Layer",
      "Transport Layer",
      "Network Layer",
      "Session Layer",
    ],
    answer: "Data link Layer",
  },
  {
    id: 30,
    question:
      "Identify the correct order of data encapsulation while data flows through OSI layers when John sent the data to Smith)",
    options: [
      "Bit, Frame, Packet Segment, Data",
      "Bit, Packet, Frame, Segment, Data",
      "Data, Frame, Packet, Segment, Bit",
      "Data, Segment, Packet, Frame, Bit",
    ],
    answer: "Data, packet, Frame, Segment, Bit",
  },
  {
    id: 31,
    question:
      "John is using an IBM system and sends data using EBCDIC, whereas Smith is using a Microsoft system understands only ASCII code. To ensure both can understand each other's data, which layer of O* Model is needed?",
    options: [
      "Application Layer",
      "Presentation Layer",
      "Transport Layer",
      "Sesston layer",
    ],
    answer: "Presentation Layer",
  },
  {
    id: 32,
    question:
      "Identify the devices which maintain a database with source and destination details, Also use the same database to reach the destination.",
    options: ["Router", "Hub", "Switch", "Printer", "Interconnections"],
    mutlipleAnswers: true,
    answer: ["Router", "Switch"],
  },
  {
    id: 33,
    question:
      "Identify the protocols that do not belong to the Internet layer of the TCP/IP model.",
    options: ["ICMp", "SNMP", "ARP", "IP", "NTP", "IPX"],
    mutlipleAnswers: true,
    answer: ["SNMP", "NTP"],
  },
  {
    id: 34,
    question:
      "When the data is being sent from Jimmy's System to his team members, which activities can the transport layer perform?",
    options: [
      "Dividing the segment into packets",
      "Perform routing to select the best path",
      "Offers connection less and connection orientated transport services",
      "Dividing the data into segments",
      "Dividing the data into bits",
    ],
    mutlipleAnswers: true,
    answer: [
      "Offers connection less and connection orientated transport services",
      "Dividing the data into segments",
    ],
  },
];

export const wirelessLocalNetwork = [
  {
    id: 1,
    question:
      "Which component is responsible for managing user connections and security in a wireless network?",
    options: ["Infrastructure", "ESS", "BSS", "Client Device"],
    answer: "Infrastructure",
  },
  {
    id: 2,
    question: "What is the primary function of the ESS in a wireless network ?",
    options: [
      "Provides user authentication and access control",
      "Defines the basic operating area for wireless devices",
      "Manages multiple BSS networks",
      "Connects to wired networks",
    ],
    answer: "Manages multiple BSS networks",
  },
  {
    id: 3,
    question:
      "The 802.11 standard defines the protocols for wireless communication. Which of the following standards operates in the 2.4 GHz frequency band?",
    options: ["802.11a", "802.11b", "802.11g", "802.11n"],
    answer: "802.11b",
  },
  {
    id: 4,
    question:
      "Which 802.11 standard introduced higher data rates compared to@02.11 b, but still operates in the 2.4 GHz band?",
    options: ["802.11a", "802.11b", "802.11g", "802.11n"],
    answer: "802.11g",
  },
  {
    id: 5,
    question:
      "802.11n introduced MIMO (Multiple-input Multiple-Output) technology for improved performance. Which standard succeeded 802.11n and offertd even faster data rates?",
    options: ["802.11a", "802.11b", "802.11g", "802.11c"],
    answer: "802.11c",
  },
  {
    id: 6,
    question:
      "In an office building, multiple access points are configured to form a single wireless network. This is an example of which type of network ?",
    options: ["Infrastructure", "ESS", "BSS", "Client Device"],
    answer: "Infrastructure",
  },
  {
    id: 7,
    question:
      "When a user roams between access points within an ESS, their connection is maintained seamlessly. What technology enables this ?",
    options: ["BSS", "ESS", "802.11a", "802.11c"],
    answer: "ESS",
  },
  {
    id: 8,
    question:
      "A signal processing technique for directional signal transmission or reception is called as",
    options: [
      "Directional Antenna",
      "Beamforming",
      "Phased array",
      "Radio repeaters",
    ],
    answer: "Beamforming",
  },
  {
    id: 9,
    question: "The job of Amplifier is to make signal",
    options: ["Forward", "Bigger", "Smaller", "Stop"],
    answer: "Bigger",
  },
  {
    id: 10,
    question: "The common phenomenon of reflection are",
    options: [
      "Surface of the Earth",
      "Surface of the Sky",
      "Surface of Water",
      "None of the above",
    ],
    answer: "Surface of the Earth",
  },
  {
    id: 11,
    question: "The objective of OF-OM is",
    options: [
      "Only to split channels",
      "Deviating the signals",
      "Splitting channel to sub-channels",
      "Deviating channels",
    ],
    answer: "Splitting channel to sub-channels",
  },
  {
    id: 12,
    question:
      "The technology that carries bandwidth and lowpeak power for communication is called as",
    options: ["Demodulation", "Spectrum", "Spread Spectrum", "FCC regulations"],
    answer: "Spread Spectrum",
  },
  {
    id: 13,
    question:
      "The time period for which the carrier remains at a certain frequency for a specified time is known as The time period for which the carrier remains at a certain frequency for a specified time is know as",
    options: ["Well Time", "Jump time", "Dwell Time", "Hop time"],
    answer: "Dwell Time",
  },
  {
    id: 14,
    question:
      "In DSSS the code that determines the ratio of spreading occurrence",
    options: ["per bit", "chips", "Spread Spectrum", "Channel length"],
    answer: "chips",
  },
];

export const ipServicesNetwork = [
  {
    id: 1,
    question: "What is the maximumstratum value defined by the NTP protocol ?",
    options: ["8", "15", "32", "64"],
    answer: "15",
  },
  {
    id: 2,
    question:
      "Which of the following devices typically has a stratum level of 1 ?",
    options: [
      "Routers in a home network",
      "Servers with GPS receivers for timekeeping",
      "Workstationsin an office environment",
      "Connects to wired networks",
    ],
    answer: "Servers with GPS receivers for timekeeping",
  },
  {
    id: 3,
    question: "Identify the port number used by Network Time Protocol.",
    options: ["TCP-123", "UDP-123", "TCP and UDP-123"],
    answer: "UDP-123",
  },
  {
    id: 4,
    question:
      "SDB1 desktops automatically get updated time and date information when the users log in using Infosys login credentials. Which protocol helps to get the automatic time and date update for each of the desktops through centralized system ?",
    options: ["DNS", "TCP", "UDP", "NTP"],
    answer: "NTP",
  },
  {
    id: 5,
    question:
      "Identify the UDP port number used by DHCP for sending data to the server.",
    options: ["66", "67", "68", "69"],
    answer: "67",
  },
  {
    id: 6,
    question: "Which of the following is a benefit of using DHCP in a network?",
    options: [
      "It requires manual configuration of each device's IP address.",
      "It simplifies network administration by automating IP address assignment",
      "It increases the chance of IP address conflicts.",
      "It requires aditional software installation on each client device.",
    ],
    answer:
      "It simplifies network administration by automating IP address assignment",
  },
  {
    id: 7,
    question:
      "A DHCP client on subnet 192.168.1.0/24 needs to communicate with a DHCP server on subnet 10.0.0.0/8 in this scenario, which device can assist the client ?",
    options: [
      "A DHCP server with multiple network interfaces",
      "A standard router",
      "A DHCP relay agent configured on the router connecting the two subnets",
    ],
    answer:
      "A DHCP relay agent configured on the router connecting the two subnets",
  },
  {
    id: 8,
    question: "DHCP provides __________ to the ",
    options: ["MAC Address", "IP Address", "Port number", "URL"],
    answer: "IP Address",
  },
  {
    id: 9,
    question: "Choose the correct options with respect to DHCP",
    options: [
      "Maintains a database of available IP addresses",
      "Maintains the information about clients IP addresses",
      "Grants an IP address when a request is received from a client",
      "Maintains information about mapping of MAC addresses with corresponding IP addresses",
    ],
    mutlipleAnswers: true,
    answer: [
      "Maintains a database of available IP addresses",
      "Maintains the information about clients IP addresses",
      "Grants an IP address when a request is received from a client",
      "Maintains information about mapping of MAC addresses with corresponding IP addresses",
    ],
  },
  {
    id: 10,
    question:
      "In which scenario, DNS protocol uses TCP for client-server transmission?",
    options: [
      "When the packet size is below 512 bytes",
      "When the packet size exceeds 512 bytes",
      "By default DNS protocol uses TCP for client — server transmission",
      "When the packet size is within 210 bytes",
    ],
    answer: "When the packet size exceeds 512 bytes",
  },
  {
    id: 11,
    question:
      "    What type of DNS record maps an IP address to a hostname (useful for troubleshooting)?",

    options: ["A Record", "PTR Record", "MX Record"],
    answer: "PTR Record",
  },
  {
    id: 12,
    question:
      "If a local DNS server has no information on resolving the host name into address, then...",
    options: [
      "Server forwards the request to the root DNS server",
      "Server forwards the request to the next level DNS server",
      "Request will not be processed",
      "Displays error message as 'webpage is not available",
    ],
    answer: "Server forwards the request to the next level DNS server",
  },
  {
    id: 13,
    question: "DNS database contains",

    options: [
      "Name server records",
      "Hostname to IP addressing mapping records",
      "Aliases for hostnames",
    ],
    mutlipleAnswers: true,
    answer: [
      "Name server records",
      "Hostname to IP addressing mapping records",
      "Aliases for hostnames",
    ],
  },
  {
    id: 14,
    question: "Main difference between SNMPv3 and SNMPv2c is .....",
    options: [
      "Management",
      "Integration",
      "Classification",
      "Enhanced security",
    ],
    answer: "Enhanced security",
  },
  {
    id: 15,
    question:
      "Which type of SNMP PDU-type supports the retrieval of values of the variables next to a particular OID?",
    options: ["Get", "Get-next", "Get-bulk", "Get-response"],
    answer: "Get-next",
  },
  {
    id: 16,
    question:
      "What is the benefit of usng the GETBULK functon compared to multiple GET requests ?",
    options: [
      "It encrypts the data being transferred.",
      "It allows the NMS to modify multiple variables at once.",
      "It retrieves multiple variables from the agent in a single request",
      "It guarantees real-time data from the agent",
    ],
    answer:
      "It retrieves multiple variables from the agent in a single request",
  },
  {
    id: 17,
    question:
      "A queuing system has three queues serviced with round-robin scheduling and one low latency queue that holds all voice traffic. Round-robin queue 1 holds predominantly UDP traffic, while round-robin queues 2 and 3 hold predominantly TCP traffic. The packets in each queue happen to have a variety of DSCP markings per the QoS design. In which queues would it make sense to use a congestion avoidance(drop management) tool?(Choose two answers)",

    options: ["The LLQ", "Queue 1", "Queue 2", "Queue 3"],
    mutlipleAnswers: true,
    answer: ["Queue 2", "Queue 3"],
  },
  {
    id: 18,
    question:
      "When a host connects into network, it sends broadcast request searching for the available DHCP servers. What type of the DHCP Handshake process is it?",
    options: ["Request", "Offer", "Discover", "Acknowledge"],
    answer: "Discover",
  },
  {
    id: 19,
    question: "What record does Record Type MX of DNS hold?",
    options: [
      "It the mapping between IPV4 Address to Host Names",
      "Mapping between Domain names to Message Transfer Agents",
      "Specifies Authoritative Information about a DNS ZONE",
      "It returns the 32 bit IPV4 Address for a hostname",
    ],
    answer: "Mapping between Domain names to Message Transfer Agents",
  },
  {
    id: 20,
    question:
      "Why was Secure Shell (SSH) developed as an alternative to Telnet?",
    options: [
      "SSH offers a more user-friendly interface for remote device management.",
      "SSH provides faster connection speeds compared to Telnet.",
      "SSH addresses security concerns by encrypting usernames and passwords during login.",
      "SSH is specifically designed for managing cloud-based network devices.",
    ],
    answer:
      "SSH addresses security concerns by encrypting usernames and passwords during login.",
  },
  {
    id: 21,
    question:
      "What are the advantages of DHCP? (i) It minimizes the work of assigning IP addresses by the Network Administrator for each host. (ii) The DHCP server ensures optimal usage of IP address (iii) It assigns IP addresses for limited time of use.",
    options: [
      "Only i) and ii)",
      "Only iii)",
      "Only ii) and iii)",
      "All i), ii) and iii)",
    ],
    answer: "All i), ii) and iii)",
  },
  {
    id: 22,
    question:
      "A FTP client connects to an FTP server using active mode and retrieves a copy of a file from the server. Which of the answers describes a TCP connection initiated by the FTP client?",
    options: [
      "The FTP control connection",
      "The FTP data connection",
      "The FTP TLS connection",
      "None of the above",
    ],
    answer: "The FTP control connection",
  },
  {
    id: 23,
    question:
      " Which of the following functions are supported by FTP but not by TFTP? ( Choose two answers)",
    options: [
      "Transferring files from client to server",
      "Changing the current directory on the server",
      "Transferring files from server to client",
      "Listing directory contents of a server's directory",
    ],
    mutlipleAnswers: true,
    answer: [
      "Changing the current directory on the server",
      "Listing directory contents of a server's directory",
    ],
  },
  {
    id: 24,
    question:
      "Customer wants to establish remote access to the Routers and Switches which are present in secondary site from the central office. Identify the appropriate protocols which fulfill customers requirement?",
    options: ["SSH", "RDP", "Telnet", "FTP"],
    mutlipleAnswers: true,
    answer: ["SSH", "Telnet"],
  },
  {
    id: 25,
    question:
      "Which of the following SNMP messages are typically sent by an SNMP agent?",
    options: ["Trap", "Get Request", "Inform", "Set Request"],
    mutlipleAnswers: true,
    answer: ["Trap", "Inform"],
  },
  {
    id: 26,
    question:
      "Refer the below exhibit and suggest, Which command to be executed on RELAY_AGENT so that Client will receive the IP address ?",
    options: [
      "int fO/1 ip helper-address 70.0.0.1 exit",
      "int fO/0 ip helper-address 60.0.0.2 exit",
      "int fO/O ip helper-address 50.0.0.1 exit",
      "int fO/1 ip helper-address 50.0.0.1 exit",
    ],
    answer: "int fO/1 ip helper-address 70.0.0.1 exit",
  },
  {
    id: 27,
    question:
      "Which of the following statements accurately describe Syslog facilities? ( select 2 options)",
    options: [
      "They categorize log messages based on the username associated with the event.",
      "They categorize log messages based on their source or purpose (e.g., auth, kern, user).",
      "They define the size of the log message file on the server.",
      "They specify the network protocol used for transmitting syslog messages",
      "They assign unique identification numbers to each log message.",
    ],
    mutlipleAnswers: true,
    answer: [
      "They categorize log messages based on their source or purpose (e.g., auth, kern, user).",
      "They specify the network protocol used for transmitting syslog messages",
    ],
  },

  {
    id: 28,
    question: "In which mode the FTP connection is established by the client.",
    options: ["Active", "Passive", "Closed connection", "Open connection"],
    answer: "Active",
  },
  {
    id: 29,
    question: "In which mode the FTP connection is established by the client.",
    options: ["Active", "Passive", "Closed connection", "Open connection"],
    answer: "Active",
  },
  {
    id: 30,
    question: "Why is Telnet a useful protocol for network administrators?",
    options: [
      "Telnet offers a secure way to transfer large files between devices.",
      "Telnet allows remote access to network devices for configuration and troubleshooting.",
      "Telnet provides real-time video conferencing capabilities for remote collaboration.",
      "Telnet simplifies web browsing by caching frequently accessed websites.",
    ],
    answer:
      "Telnet allows remote access to network devices for configuration and troubleshooting.",
  },
  {
    id: 27,
    question:
      "What is the primary function of the Syslog Application Layer? ( select 2 options)",
    options: [
      "Define the format of the log message content.",
      "Interpret the message, route it to the log server, and handle storage.",
      "Entrypt the message content for secure transmission.",
      "Select the appropriate transport protocol for sending the message.",
      "Compress the message to reduce network bandwidth usage.",
    ],
    mutlipleAnswers: true,
    answer: [
      "Define the format of the log message content.",
      "Interpret the message, route it to the log server, and handle storage.",
    ],
  },
];
