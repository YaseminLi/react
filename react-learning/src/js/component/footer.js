import React from 'react';
const FooterCss=require('../../css/footer.css');
class ComponentFooter extends React.Component {
    render() {
        console.log(FooterCss)
        // const FooterCss = {
        //     "miniFooter": {
        //         "backgroundColor": "green",
        //         "color": "brown"
        //     },
        //     "miniFooter_h1": {
        //         "fontStyle": "italic"
        //     }
        // }
        return (
            //<footer style={FooterCss.miniFooter}>
            //<footer>
            <footer class={FooterCss.miniFooter}>
                <h1>这里是底部</h1>
            </footer>
        )
    }
}
export default ComponentFooter;