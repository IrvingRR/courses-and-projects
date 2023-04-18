import { useState } from 'react';
import { Field, FieldTags, FieldTag, FieldLabel, FieldContent, FieldLegend, FieldInput } from '../styled';
import { Button } from './Button';

export const InputTags = ({ label, legend, tags = [], setTags, ...props  }) => {

    const [newTag, setNewTag] = useState('');

    const handleChangeTag = (e) => setNewTag(e.target.value);

    const handleAddTag = (e) => {
        if(newTag) {
            setTags([...tags, newTag]);
            setNewTag('');
        }
    }

    const handleRemoveTag = (e) => {
        const tagsWithoutTagDeleted = tags.filter((tag) => tag !== e.target.textContent);
        setTags(tagsWithoutTagDeleted);
    }

  return (
    <>
    <Field>
        {label && <FieldLabel>{label}</FieldLabel>}
        {tags.length > 0 && (
            <FieldTags>
                {
                    tags.map((tag, index) => (
                        <FieldTag key={`${tag}-${index}`}  onClick={handleRemoveTag}>
                            {tag}
                        </FieldTag>
                    ))
                }
            </FieldTags>
        )}
        <FieldContent>
            <FieldInput { ...props } autoComplete="off" value={newTag} onChange={handleChangeTag} />
        </FieldContent>
        {legend && <FieldLegend isValid={isValid}>{legend}</FieldLegend>}
        <Button type='button' variant='secondary' onClick={handleAddTag}>Add</Button>
    </Field>
    </>
  )
}
