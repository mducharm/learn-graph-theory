
export let sections = [
    {
        title: "intro",
        layout: "cola",
        graph: [{
            data: {
                id: "1",
                label: "P"
            }
        },
        {
            data: {
                id: "2",
                label: "sucrose phosphate phosphatase"
            }
        },
        {
            data: {
                id: "4",
                label: "sucrose 6-phosphate"
            }
        },
        {
            data: {
                id: "6",
                label: "sucrose"
            }
        },
        {
            data: {
                id: "8",
                label: "invertase"
            }
        },
        {
            data: {
                id: "10",
                label: "fructose"
            }
        },
        {
            data: {
                id: "12",
                label: "fructokinase"
            }
        },
        {
            data: {
                id: "14",
                label: "fructose 6-phosphate"
            }
        },
        {
            data: {
                id: "20",
                label: "phosphoglucose isomerase"
            }
        },
        {
            data: {
                id: "22",
                label: "glucose 6-phosphate"
            }
        },
        {
            data: {
                id: "28",
                label: "glucose"
            }
        },
        {
            data: {
                id: "30",
                label: "hexokinase"
            }
        },
        {
            data: {
                id: "33",
                label: "sucrose synthase"
            }
        },
        {
            data: {
                id: "36",
                label: "UDP - glucose"
            }
        },
        {
            data: {
                id: "38",
                label: "sucrose phosphate synthase"
            }
        },
        {
            data: {
                id: "41",
                label: "UDP"
            }
        },
        {
            data: {
                id: "44",
                label: "fructose 6-phosphate"
            }
        },
        {
            data: {
                id: "46",
                label: "ATP"
            }
        },
        {
            data: {
                id: "47",
                label: "ATP"
            }
        },
        {
            data: {
                id: "52",
                label: "ATP"
            }
        },
        {
            data: {
                id: "57",
                label: "ADP"
            }
        },
        {
            data: {
                id: "66",
                label: "PP"
            }
        },
        {
            data: {
                id: "71",
                label: "UTP"
            }
        },
        {
            data: {
                id: "76",
                label: "UDP glucose pyrophosphorylase"
            }
        },
        {
            data: {
                id: "80",
                label: "glucose 1-phosphate"
            }
        },
        {
            data: {
                id: "86",
                label: "phospho- glucomutase (cPGM)"
            }
        },
        {
            data: {
                id: "89",
                label: "G1P transporter"
            }
        },
        {
            data: {
                id: "90",
                label: "P"
            }
        },
        {
            data: {
                id: "95",
                label: "P"
            }
        },
        {
            data: {
                id: "102",
                label: "P"
            }
        },
        {
            data: {
                id: "103",
                label: "P"
            }
        },
        {
            data: {
                id: "104",
                label: "G6P transporter"
            }
        },
        {
            data: {
                id: "109",
                label: "glucose 6-phosphate"
            }
        },
        {
            data: {
                id: "115",
                label: "phospho- glucomutase (cPGM)"
            }
        },
        {
            data: {
                id: "121",
                label: "glucose 1-phosphate"
            }
        },
        {
            data: {
                id: "128",
                label: "ADPglucose pyrophosphorylase (pAGPase)"
            }
        },
        {
            data: {
                id: "130",
                label: "ADP - glucose"
            }
        },
        {
            data: {
                id: "136",
                label: "PP"
            }
        },
        {
            data: {
                id: "141",
                label: "ATP"
            }
        },
        {
            data: {
                id: "148",
                label: "inorganic diphosphatase"
            }
        },
        {
            data: {
                id: "149",
                label: "P"
            }
        },
        {
            data: {
                id: "156",
                label: "phosphate transporter"
            }
        },
        {
            data: {
                id: "158",
                label: "P"
            }
        },
        {
            data: {
                id: "164",
                label: "starch synthase (simpl.)"
            }
        },
        {
            data: {
                id: "166",
                label: "ADP"
            }
        },
        {
            data: {
                id: "172",
                label: "starch"
            }
        },
        {
            data: {
                id: "178",
                label: "ATP/ADP transporter"
            }
        },
        {
            data: {
                id: "179",
                label: "ADP"
            }
        },
        {
            data: {
                id: "184",
                label: "ADP"
            }
        },
        {
            data: {
                id: "189",
                label: "ATP"
            }
        },
        {
            data: {
                source: "2",
                target: "1"
            }
        },
        {
            data: {
                source: "4",
                target: "2"
            }
        },
        {
            data: {
                source: "2",
                target: "6"
            }
        },
        {
            data: {
                source: "6",
                target: "8"
            }
        },
        {
            data: {
                source: "8",
                target: "10"
            }
        },
        {
            data: {
                source: "12",
                target: "14"
            }
        },
        {
            data: {
                source: "14",
                target: "20"
            }
        },
        {
            data: {
                source: "20",
                target: "22"
            }
        },
        {
            data: {
                source: "8",
                target: "28"
            }
        },
        {
            data: {
                source: "28",
                target: "30"
            }
        },
        {
            data: {
                source: "30",
                target: "22"
            }
        },
        {
            data: {
                source: "6",
                target: "33"
            }
        },
        {
            data: {
                source: "33",
                target: "10"
            }
        },
        {
            data: {
                source: "33",
                target: "36"
            }
        },
        {
            data: {
                source: "36",
                target: "38"
            }
        },
        {
            data: {
                source: "38",
                target: "4"
            }
        },
        {
            data: {
                source: "38",
                target: "41"
            }
        },
        {
            data: {
                source: "41",
                target: "33"
            }
        },
        {
            data: {
                source: "44",
                target: "38"
            }
        },
        {
            data: {
                source: "52",
                target: "12"
            }
        },
        {
            data: {
                source: "12",
                target: "57"
            }
        },
        {
            data: {
                source: "46",
                target: "30"
            }
        },
        {
            data: {
                source: "30",
                target: "47"
            }
        },
        {
            data: {
                source: "71",
                target: "76"
            }
        },
        {
            data: {
                source: "76",
                target: "66"
            }
        },
        {
            data: {
                source: "76",
                target: "36"
            }
        },
        {
            data: {
                source: "80",
                target: "76"
            }
        },
        {
            data: {
                source: "22",
                target: "86"
            }
        },
        {
            data: {
                source: "86",
                target: "80"
            }
        },
        {
            data: {
                source: "95",
                target: "89"
            }
        },
        {
            data: {
                source: "89",
                target: "90"
            }
        },
        {
            data: {
                source: "102",
                target: "104"
            }
        },
        {
            data: {
                source: "80",
                target: "89"
            }
        },
        {
            data: {
                source: "104",
                target: "109"
            }
        },
        {
            data: {
                source: "115",
                target: "109"
            }
        },
        {
            data: {
                source: "121",
                target: "89"
            }
        },
        {
            data: {
                source: "121",
                target: "115"
            }
        },
        {
            data: {
                source: "121",
                target: "128"
            }
        },
        {
            data: {
                source: "128",
                target: "130"
            }
        },
        {
            data: {
                source: "141",
                target: "128"
            }
        },
        {
            data: {
                source: "128",
                target: "136"
            }
        },
        {
            data: {
                source: "136",
                target: "148"
            }
        },
        {
            data: {
                source: "148",
                target: "149"
            }
        },
        {
            data: {
                source: "149",
                target: "156"
            }
        },
        {
            data: {
                source: "156",
                target: "158"
            }
        },
        {
            data: {
                source: "130",
                target: "164"
            }
        },
        {
            data: {
                source: "164",
                target: "166"
            }
        },
        {
            data: {
                source: "178",
                target: "179"
            }
        },
        {
            data: {
                source: "184",
                target: "178"
            }
        },
        {
            data: {
                source: "178",
                target: "189"
            }
        },
        {
            data: {
                source: "141",
                target: "178"
            }
        },
        {
            data: {
                source: "104",
                target: "103"
            }
        },
        {
            data: {
                source: "10",
                target: "12"
            }
        },
        {
            data: {
                source: "164",
                target: "172"
            }
        },
        {
            data: {
                source: "22",
                target: "104"
            }
        }
        ],
    },
    {
        contents: `
      A graph is a collection of vertices and edges. Put simply: dots and lines.
      `,
        layout: "circle",
        graph: [
            {
                // node a
                data: { id: "a" },
            },
            {
                // node b
                data: { id: "b" },
            },
            {
                // edge ab
                data: { id: "ab", source: "a", target: "b" },
            },
        ],
        el: null,
    },
    {
        title: `What is a graph?`,
        contents: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      `,
        layout: "cola",
        graph: [
            {
                data: { id: "a" },
            },
            {
                data: { id: "b" },
            },
            {
                data: { id: "c" },
            },
            {
                // edge ab
                data: { id: "ab", source: "a", target: "b" },
            },
        ],
        el: null,
    },

];