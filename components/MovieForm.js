import React from "react";
import { Divider, Form, Input} from 'semantic-ui-react';

export const Movies = ({movies}) => {
    return (
        <div>{movies.length}</div>
    );
}

export const MovieForm = () => {
    const [title, setTitle] = useState('');

    return (
        <Form>
            <Form.Field>
                <Input placeholder="movie title" value ={title} onChange={e => setTitle(e.target.value)} />
            </Form.Field>
        </Form>
    );
};