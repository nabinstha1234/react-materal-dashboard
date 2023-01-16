export default {
    btnContainedSm: {
        borderRadius: '8px',
        height: '33px',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '14px',
        textTransform: 'capitalize',
        padding: '8px 24px'
    },
    btnOutlinedSm: {
        borderRadius: '8px',
        height: '33px',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '14px',
        textTransform: 'capitalize',
        color: '#0A68FF',
        borderColor: '#0A68FF',
        padding: '8px'
    },

    btn: {
        borderRadius: '16px',
        height: '48px',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '16px',
        textTransform: 'capitalize',
    },
    btnOutlined: {
        borderRadius: '16px',
        height: '48px',
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '16px',
        textTransform: 'capitalize',
        borderColor: '#0A68FF',
        color: '#0A68FF'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        background: '#FFFFFF',
        padding: '14px 24px',
        boxShadow: '0px 0px 16px 1px rgba(9, 46, 105, 0.15)',
        borderRadius: '24px!important',
        flex: 'none',
        order: 0,
        flexGrow: 0,
    },
    modal: {
        position: 'absolute',
        top: '25%',
        left: '25%',
        // transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: '0px 0px 16px 1px rgba(9, 46, 105, 0.15)',
        borderRadius: '24px',
        paddingLeft: 4,
        paddingRight: 4,
        minHeight: "450px",
        width: "50%",
        outline: "none"
    },
    modalBg: { backgroundColor: "rgba(0,0,0,0.1)", },
    inputLabel: {
        color: "#000F28",
        fontWeight: 500,
        fontSize: "16px",
        marginBottom: '20px'
    },
    datePickerInput: {
        width: '95%',
        height: '48px',
        borderRadius: '16px',
        border: 'none',
        outline: 'none',
        padding: '8px, 16px, 8px, 16px',
        backgroundColor: '#F4F8FB',
        marginTop: '12px',
        marginBottom: '20px',
    },
    mb20: {
        marginBottom: "20px"
    },
    marginLeft30: {
        marginLeft: "30px"
    },
    marginLeft20: {
        marginLeft: "20px"
    },
    badgeStyle: {
        backgroundColor: "#0A68FF",
        color: "#fff",
        fontFamily: "Montserrat",
    },
    tableHead: {
        fontSize: '16px',
        color: '#092E69',
    },
    bgWhite: {
        backgroundColor: "#fff"
    },
    listAvatar: { minWidth: 0, marginRight: "10px" },
    avatarName: {
        color: "#000F28",
        fontWeight: "500"
    },
    avatarSubHead: {
        fontSize: "14px",
        lineHeight: '17px',
        color: "#848D96"
    },
    chip: {
        background: 'rgba(10, 104, 255, 0.1)',
        border: '0.6px solid #0A68FF',
        borderRadius: '8px',
        color: "#000F28",
        fontWeight: "500"
    },
    tabsStyle: {
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            height: '6px',
            borderRadius: '8px',
            border: '0.5px solid #0A68FF',
        },
        '& .MuiTabs-indicatorSpan': {
            width: '100%',
            backgroundColor: '#0A68FF',
        },
    },
    tabHead: { padding: '25px', fontWeight: '600' },
    fs14Dark: { color: '#000F28', fontSize: '14px' }
}