#eng 

*The missile knows where it is at all times. It knows this because it knows where it isn't, by subtracting where it is, from where it isn't, or where it isn't, from where it is, whichever is greater*
## What is a control system

A **system** is an interconnected set of elements that work together to achieve a common objective or function. Basically anything with Inputs and Outputs.

**Control systems** are a specific type of system designed to regulate or manipulate the behaviour of other systems. They can be Open or Closed loop (Feedback).

### Open Loop Control System

- Actions are predetermined, not based on the systems output
- Controller is independent from the System's state / performance
- Easier to implement, less robust, more prone to uncertainties

| Pros                                  | Cons                                      |
|---------------------------------------|-------------------------------------------|
| Simple design and implementation     | Susceptible to disturbances               |
| Low cost                             | Limited ability to adapt to changes       |
| Easy to analyze and understand       | Lack of robustness                        |
| No need for feedback sensors         | Performance may degrade over time         |
| Suitable for stable, predictable systems | Does not account for uncertainties      |

### Closed-Loop Control Systems

#### Feedback Control Systems
- Control actions are based on the output from the system
- Controller monitors the System's outputs and adjusts to minimise the output error
- Feedback control systems are more robust and can change on demand to handle uncertainties
- Feedback control systems are *less sensitive* to parameter variations

| Pros                                  | Cons                                      |
|---------------------------------------|-------------------------------------------|
| Robustness to disturbances           | More complex design and implementation   |
| Superior performance under uncertainty | Higher cost due to feedback sensors      |
| Adaptability to changes in the system | Risk of instability if improperly tuned   |
| Ability to regulate systems with dynamic behavior | Sensitivity to sensor noise            |
| Improved accuracy and precision      | Requires tuning and optimization          |
### Feedforward Control Systems

- Feedforward control systems anticipate disturbances and adjust the control inputs before they affect the system's output.
- Unlike feedback control systems, feedforward control systems do not rely on feedback from the system's output to make adjustments.
- Feedforward control systems are typically used when the disturbances can be accurately measured or predicted.

| Pros                                  | Cons                                      |
|---------------------------------------|-------------------------------------------|
| Effective at mitigating known disturbances | Ineffective against unpredictable disturbances |
| Can improve system performance by preemptively adjusting control inputs | Requires accurate models or measurements of disturbances |
| Helps reduce the impact of disturbances on the system's output | Complexity increases with the number of disturbances to be compensated for |
| Complements feedback control systems for enhanced performance | Sensitivity to modeling errors and uncertainties in disturbance prediction |

