export default function Featured() {
  return (
    <div id="about" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/ccc64f0e-d13d-4776-9b92-881d3d230cc1/files/52fe0f0c-1d65-4bc4-ab0b-11c1c642f9db.jpg"
          alt="Турбинный зал Мутновской ГЕОЭС"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Станция в цифрах</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          50 МВт установленной мощности. Обеспечивает более 20% потребностей Камчатки в электроэнергии. Работает с 2002 года без выбросов CO₂.
        </p>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div>
            <p className="text-3xl font-bold text-neutral-900">50</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">МВт мощности</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900">20+</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">лет работы</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900">0</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">выбросов CO₂</p>
          </div>
        </div>
        <a href="#contact" className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Запланировать визит
        </a>
      </div>
    </div>
  );
}
