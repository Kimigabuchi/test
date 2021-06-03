let controllers = [{
  id: 1,
  an: "AN0",
  name: "Контроллер 1",
  mode: 1,
  formula: "",
  min: 0,
  max: 100,
  correction: 1,
  frontPause: 0,
  baseLimit: 1,
  status: true
},{
  id: 2,
  an: "AN2",
  name: "Контроллер 2",
  mode: 2,
  formula: "",
  min: 0,
  max: 100,
  correction: 1,
  frontPause: 0,
  baseLimit: 1,
  status: true
}]

const SCENES_OBJECTS = [{
  name: "Object 1"
},{
  name: "Object 2"
},{
  name: "Object 3"
},{
  name: "Object 4"
},{
  name: "Object 5"
}]

const getControllers = controllers => {
  return `
    
  `
}

export default `<div class="controllers-container">
  <table>
    <thead>
      <th>Объект</th>
      <th>Имя контроллера</th>
      <th>Номер лапки</th>
      <th>Назначение контроллера</th>
      <th>Формула расчета для датчика</th>
      <th>Min</th>
      <th>Max</th>
      <th>Коррекция</th>
      <th>Фронт пауза</th>
      <th>Лимит базы</th>
      <th>On/Off</th>
      <th></th>
    </thead>
    <tbody>
      ${controllers.map(controller => `<tr>
        <td>
          <select>
            ${SCENES_OBJECTS.map(so =>
              '<option value=' + so.name + '>' + so.name + '</option>'
            ).join("")}
          </select>
        </td>
        <td>
          <input
            placeholder="Имя контроллера"
            value="2"
          />
        </td>
        <td>
          <select>
            <option selectedPin="an0">AN0</option>
            <option selectedPin="an1">AN1</option>
            <option selectedPin="an2">AN2</option>
            <option selectedPin="an3">AN3</option>
            <option selectedPin="an4">AN4</option>
            <option selectedPin="an5">AN5</option>
            <option selectedPin="an6">AN6</option>
            <option selectedPin="an7">AN7</option>
            <option selectedPin="an8">AN8</option>
            <option selectedPin="an9">AN9</option>
          </select>
        </td>
        <td>
          <input
            placeholder="Формула контроллера"
            value=""
          />
        </td>
        <td>
          <input
            class="controller-input-value"
            placeholder="Min значение"
            value=""
          />
        </td>
        <td>
          <input
            class="controller-input-value"
            placeholder="Max значение"
            value=""
          />
        </td>
        <td>
          <input
            class="controller-input-value"
            placeholder="Коррекция"
            value=""
          />
        </td>
        <td>
          <input
            class="controller-input-value"
            placeholder="Фронт пауза"
            value=""
          />
        </td>
        <td>
          <input
            class="controller-input-value"
            placeholder="Лимит базы"
            value=""
          />
        </td>
        <td>
          <input
            type="checkbox"
            value=""
          />
        </td>
        <td>
          <svg
            on:click={() => deleteController(index)}
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
          </svg>
        </td>
      </tr>`).join("")}
    </tbody>
  </table>
  <!-- {#if showControllerAddingDialog}
    <div class="action-container">
      <input
        class="search-controller-input"
        placeholder="Введите id контроллера"
      />
      <div
        class="action-btn add"
      >Добавить</div>
      <div
        class="action-btn cancel"
        on:click={() => showControllerAddingDialog = false}
      >Отмена</div>
    </div>
  {:else} -->
    <div
      class="add-btn"
      on:click={addNewController}
    >+</div>
  <!-- {/if} -->
</div>`