export default function specialAttack({ special }) {
    const result = [];
    for(const attack of special) {
        const { id, name, description = 'Описание недоступно', icon } = attack;
        result.push({
            id,
            name,
            description,
            icon
        });
    }

    return result;
}