function validIPAddress(queryIP: string): string {

    if (queryIP.includes(".")) {
        const splitIp: string[] = queryIP.split(".");

        // Checking the length
        if (splitIp.length !== 4) {
            return "Neither";
        }

        for (const ipSection of splitIp) {
            // Checking if ipSection is empty
            if (ipSection.length === 0) {
                return "Neither"
            }
            
            // Checking if the ip address is 01,02...
            if (ipSection.startsWith("0") && ipSection !== "0") {
                return "Neither";
            }

            // Checking if not a number
            if (Number.isNaN(Number(ipSection))) {
                return "Neither";
            }

            // Checking with the IP Bound 0 <= ip <= 255
            if (Number(ipSection) < 0 || Number(ipSection) > 255) {
                return "Neither";
            }

            // 1e5 can be passed as number, so to prevent that each character is made sure to be an number 
            for (const character of ipSection) {
                if (!("0123456789".includes(character))) {
                    return "Neither";
                }
            }

        }
        return "IPv4";
    }

    if (queryIP.includes(":")) {
        const splitIp: string[] = queryIP.split(":");

        // Checking the length
        if (splitIp.length !== 8) {
            return "Neither";
        }

        for (const ipSection of splitIp) {

            // Checking length of each ipSection
            if (ipSection.length < 1 || ipSection.length > 4) {
                return "Neither";
            }

            // Checking each character is within hexadecimal range
            for (const character of ipSection) {
                if (!("0123456789abcdef".includes(character.toLowerCase()))) {
                    return "Neither";
                }
            }
        }

        return "IPv6";
    }

    return "Neither";
};