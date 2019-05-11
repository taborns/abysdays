var config = {
        container: "#team-row",
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    ceo = {
        text: {
            name: "Shopia Shoarega",
            title: "General Manager and managing partner",
            
        }
    },

    cto = {
        parent: ceo,
        text:{
            name: "Michael S. Negash",
            title: "Marketing excutive & Managing Partner",
        },
        stackChildren: true,
    },
    cbo = {
        parent: ceo,
        stackChildren: true,
        text:{
            name: "Zelalem Dagnachew",
            title: "Finance Excutive & Managing Partner",
        },
        
    },
    cdo = {
        parent: ceo,
        text:{
            name: "Mgr. Berhanu Mergia",
            title: "Operation Manager",
            
        },
        
    },
    cio = {
        parent: cto,
        text:{
            name: "Logistic Manager",
        },
        
    },
    ciso = {
        parent: cto,
        text:{
            name: "Sales Manager",
            
        },
        
    },
    cio2 = {
        parent: cbo,
        text:{
            name: "Accountant",
        },
        
    },
    ciso2 = {
        parent: cbo,
        text:{
            name: "Junior Accountant",
        },
        
    }

    chart_config = [
        config,
        ceo,
        cto,
        cbo,
        cdo,
        cio,
        ciso,
        cio2,
        ciso2,
    ];



