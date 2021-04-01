export default {
    employeePart: {
        label: 'Údaje o zamestancovi',
        fields: [
            {
                name: 'firstName',
                label: 'Krstné Meno',
                autoComplete: 'given-name',
                required: true,
            },
            {
                name: 'lastName',
                label: 'Priezvisko',
                autoComplete: 'family-name',
                required: true,
            },
            {
                name: 'birthDate',
                label: 'Dátum narodenia',
                birthInput: true,
                type: 'date',
            },
            {
                name: 'personalId',
                label: 'Rodné číslo',
                required: true,
            },
            {
                name: 'address1',
                label: 'Adresa riadok č. 1',
                autoComplete: 'shipping address-line1',
                required: true,
                marginDivider: true,
                sm: 12,
            },
            {
                name: 'address2',
                label: 'Adresa riadok č. 2',
                autoComplete: 'shipping address-line2',
                sm: 12,
            },
            {
                name: 'city',
                label: 'Mesto',
                autoComplete: 'shipping address-level2',
                required: true,
            },
            {
                name: 'zip',
                label: 'PSČ',
                autoComplete: 'shipping postal-code',
                required: true,
            },
            {
                name: 'maritalStatus',
                label: 'Rodinný stav',
                itemSelector: 'status',
                type: 'dropdown',
                marginDivider: true,
            },
            {
                name: 'numOfChildren',
                label: 'Počet vyživovaných detí',
                required: true,
                type: 'number',
                inputProps: {min: 0, max: 20},
                marginDivider: true,
            },
            {
                name: 'employedFrom',
                label: 'Zamestnaný od',
                birthInput: true,
                type: 'date',
                marginDivider: true,
            },
            {
                name: 'insuranceCompany',
                label: 'Poisťovňa',
                itemSelector: 'name',
                type: 'dropdown',
                marginDivider: true,
            },
        ],
    },
    incidentPart: {
        label: 'Údaje o pracovnom úraze',
        fields: [
            {
                name: 'incidentDate',
                label: 'Dátum úrazu',
                type: 'date',
                sm: 3,
            },
            {
                name: 'incidentTime',
                value: 'incidentDate',
                label: 'Čas úrazu',
                placeholder: '12:00',
                type: 'time',
                sm: 3,
            },
            {
                name: 'workingFrom',
                label: 'Pracovná doba od',
                placeholder: '08:00',
                minutesStep: 15,
                type: 'time',
                sm: 3,
            },
            {
                name: 'workingTo',
                label: 'Pracovná doba do',
                placeholder: '15:00',
                minutesStep: 15,
                type: 'time',
                sm: 3,
            },
            {
                name: 'workedHours',
                label: 'Počet odpracovaných hodín',
                type: 'number',
                sm: 4,
            },
            {
                name: 'incidentLocation',
                label: 'Miesto úrazu',
                required: true,
                sm: 4,
            },
            {
                name: 'affectedBodyPart',
                label: 'Postihnutá časť tela',
                required: true,
                sm: 4,
            },
            {
                name: 'jobDescription',
                label: 'Druh vykonávanej práce',
                required: true,
                rows: 3,
                sm: 12
            },
            {
                name: 'incidentDescription',
                label: 'Popis úrazu',
                required: true,
                rows: 10,
                sm: 12
            },
            {
                name: 'witness',
                label: 'Meno a priezvisko svedka',
                required: true,
            },
            {
                name: 'creator',
                label: 'Zaznamenal',
                required: true,
            }
        ],
    },
}
