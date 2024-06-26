import { Button, Grid } from 'antd-mobile'

const Question = ({ question, options, onAnswer }) => {
    return (
        <div>
            <Grid columns={1} style={{ '--gap-vertical': '3vh', 'marginTop': '20vh', 'padding': '8vw' }}>
                <Grid.Item>
                    <h3>{question.text}</h3>
                </Grid.Item>
                {options.map((option) => (
                    <Grid.Item key={option.id}>
                        <Button block color='success' size='large' className="all-button-font"
                            onClick={() => { onAnswer(option.id) }}>
                            {option.text}
                        </Button>
                    </Grid.Item>
                ))}
            </Grid>

        </div>
    );
};

export default Question;