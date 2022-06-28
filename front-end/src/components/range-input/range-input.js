import PropTypes from 'prop-types'
import { Range, getTrackBackground } from 'react-range'

const RangeInput = ({ values, setValues, min, max, step, numFixed }) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '15px'
        }}
    >
        <Range
            values={values}
            step={step}
            min={min}
            max={max}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: '36px',
                        display: 'flex',
                        width: '100%'
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: '5px',
                            width: '100%',
                            borderRadius: '4px',
                            background: getTrackBackground({
                                values,
                                colors: ['var(--gray)', '#fff', 'var(--gray)'],
                                min,
                                max,
                            }),
                            alignSelf: 'center'
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({ index, props, isDragged }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '19px',
                        width: '19px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--orange)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '-28px',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            padding: '4px',
                        }}
                    >
                        {values[index].toFixed(numFixed)}
                    </div>
                </div>
            )}
        />
    </div>
)

RangeInput.propTypes = {
    values: PropTypes.array.isRequired,
    setValues: PropTypes.func.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    numFixed: PropTypes.number.isRequired
}

export default RangeInput