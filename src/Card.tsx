interface Props {
    color: string;
    children: any;
}

const Card = (props: Props) => {
    const { color, children } = props;
    return (
        <div
            style={{
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: color,
                color: "#000022",
            }}
        >
            <h1
                style={{
                    color: "#000022",
                }}
            >
                {children}
            </h1>
        </div>
    );
};

export default Card;
