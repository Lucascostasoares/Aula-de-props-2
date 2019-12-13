import React from 'react';


class Menu extends React.Component{



    clicado = (imagem) => {
        console.log('imagem');
    }

    render() {
        return(
            <div>
                <p>&#9776;</p>
                {this.props.component.map(imagem => {
                    return (
                        <p onClick={() => this.clicado(imagem)}>{imagem}</p>
                    )
                })}
            </div>
        )
    }
}

export default Menu;